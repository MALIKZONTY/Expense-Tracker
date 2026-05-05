const db = require('../config/db');

class TransactionModel {
  static async createTransaction(userId, amount, type, category, note, date, paymentMethod = 'Cash', toPaymentMethod = null) {
    const query = `
      INSERT INTO transactions (user_id, amount, type, category, note, date, payment_method, to_payment_method)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [userId, amount, type, category, note, date, paymentMethod, toPaymentMethod];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAllTransactions(userId, filters = {}) {
    const { type, category, startDate, endDate, limit, offset } = filters;
    let whereClause = 'WHERE user_id = $1 AND is_deleted = false';
    const values = [userId];
    let placeholderCount = 2;

    if (type) {
      whereClause += ` AND type = $${placeholderCount}`;
      values.push(type);
      placeholderCount++;
    }
    if (category) {
      whereClause += ` AND category = $${placeholderCount}`;
      values.push(category);
      placeholderCount++;
    }
    if (startDate) {
      whereClause += ` AND date >= $${placeholderCount}`;
      values.push(startDate);
      placeholderCount++;
    }
    if (endDate) {
      whereClause += ` AND date <= $${placeholderCount}`;
      values.push(endDate);
      placeholderCount++;
    }

    const countResult = await db.query(`SELECT COUNT(*) FROM transactions ${whereClause}`, values);
    const total = parseInt(countResult.rows[0].count);

    let dataQuery = `SELECT * FROM transactions ${whereClause} ORDER BY date DESC, created_at DESC`;
    const dataValues = [...values];
    let dataPlaceholderCount = placeholderCount;

    if (limit !== undefined) {
      dataQuery += ` LIMIT $${dataPlaceholderCount}`;
      dataValues.push(limit);
      dataPlaceholderCount++;
    }
    if (offset !== undefined) {
      dataQuery += ` OFFSET $${dataPlaceholderCount}`;
      dataValues.push(offset);
      dataPlaceholderCount++;
    }

    const result = await db.query(dataQuery, dataValues);
    return { transactions: result.rows, total };
  }

  static async getSummary(userId) {
    const query = `
      SELECT type, COALESCE(SUM(amount), 0) as total, COUNT(*) as count
      FROM transactions
      WHERE user_id = $1 AND is_deleted = false AND type IN ('income', 'expense')
      GROUP BY type;
    `;
    const result = await db.query(query, [userId]);

    // Add total count including exchanges
    const countQuery = `SELECT COUNT(*) FROM transactions WHERE user_id = $1 AND is_deleted = false`;
    const countResult = await db.query(countQuery, [userId]);

    // We'll return the array but the caller expects certain types for total display
    return {
      rows: result.rows,
      totalTransactions: parseInt(countResult.rows[0].count)
    };
  }

  static async getExpensesByCategory(userId) {
    const query = `
      SELECT category as name, COALESCE(SUM(amount), 0) as value
      FROM transactions
      WHERE user_id = $1 AND type = 'expense' AND is_deleted = false
      GROUP BY category;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }

  static async getDynamicTrend(userId, period) {
    let format = 'YYYY-MM';
    let limit = 6;
    let isWeekly = false;

    if (period === 'daily') {
      format = 'YYYY-MM-DD';
      limit = 7;
    } else if (period === 'weekly') {
      isWeekly = true;
      format = 'YYYY-MM-DD';
      limit = 8;
    } else if (period === 'yearly') {
      format = 'YYYY';
      limit = 5;
    }

    const dateExpr = isWeekly ? "date_trunc('week', date)" : "date";

    const query = `
      SELECT * FROM (
        SELECT TO_CHAR(${dateExpr}, '${format}') as period_name, COALESCE(SUM(amount), 0) as amount
        FROM transactions
        WHERE user_id = $1 AND type = 'expense' AND is_deleted = false
        GROUP BY period_name
        ORDER BY period_name DESC
        LIMIT ${limit}
      ) subquery
      ORDER BY period_name ASC;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }

  static async getWalletBalances(userId) {
    const query = `
      SELECT method as name, SUM(val) as balance FROM (
        -- Regular Incomes
        SELECT payment_method as method, amount as val 
        FROM transactions 
        WHERE user_id = $1 AND is_deleted = false AND type = 'income'
        
        UNION ALL
        
        -- Regular Expenses
        SELECT payment_method as method, -amount as val 
        FROM transactions 
        WHERE user_id = $1 AND is_deleted = false AND type = 'expense'
        
        UNION ALL
        
        -- Exchange Outflows
        SELECT payment_method as method, -amount as val 
        FROM transactions 
        WHERE user_id = $1 AND is_deleted = false AND type = 'exchange'
        
        UNION ALL
        
        -- Exchange Inflows
        SELECT to_payment_method as method, amount as val 
        FROM transactions 
        WHERE user_id = $1 AND is_deleted = false AND type = 'exchange' AND to_payment_method IS NOT NULL
      ) as movements
      GROUP BY method;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }

  static async getIncomeByMethod(userId) {
    const query = `
      SELECT payment_method as name, SUM(amount) as value
      FROM transactions
      WHERE user_id = $1 AND type = 'income' AND is_deleted = false
      GROUP BY payment_method;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }

  static async softDeleteTransaction(id, userId) {
    const query = `
      UPDATE transactions
      SET is_deleted = true
      WHERE id = $1 AND user_id = $2
      RETURNING *;
    `;
    const result = await db.query(query, [id, userId]);
    return result.rows[0];
  }

  static async updateTransaction(id, userId, updates) {
    const fields = [];
    const values = [];
    let placeholderCount = 1;

    // Mapping of incoming keys to DB columns
    const mapping = {
      amount: 'amount',
      type: 'type',
      category: 'category',
      note: 'note',
      date: 'date',
      payment_method: 'payment_method',
      paymentMethod: 'payment_method',
      to_payment_method: 'to_payment_method',
      toPaymentMethod: 'to_payment_method'
    };

    const processedColumns = new Set();

    for (const [key, column] of Object.entries(mapping)) {
      if (Object.prototype.hasOwnProperty.call(updates, key) && !processedColumns.has(column)) {
        fields.push(`${column} = $${placeholderCount}`);
        values.push(updates[key]);
        placeholderCount++;
        processedColumns.add(column);
      }
    }

    if (fields.length === 0) return null;

    values.push(id, userId);
    const query = `
      UPDATE transactions
      SET ${fields.join(', ')}
      WHERE id = $${placeholderCount} AND user_id = $${placeholderCount + 1} AND is_deleted = false
      RETURNING *;
    `;

    const result = await db.query(query, values);
    return result.rows[0];
  }
}

module.exports = TransactionModel;
