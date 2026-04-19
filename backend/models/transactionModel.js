const db = require('../config/db');

class TransactionModel {
  static async createTransaction(userId, amount, type, category, note, date, paymentMethod = 'Cash') {
    const query = `
      INSERT INTO transactions (user_id, amount, type, category, note, date, payment_method)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [userId, amount, type, category, note, date, paymentMethod];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAllTransactions(userId, type, category) {
    let query = 'SELECT * FROM transactions WHERE user_id = $1 AND is_deleted = false';
    const values = [userId];
    let count = 2;

    if (type) {
      query += ` AND type = $${count}`;
      values.push(type);
      count++;
    }
    if (category) {
      query += ` AND category = $${count}`;
      values.push(category);
      count++;
    }

    query += ' ORDER BY date DESC, created_at DESC';
    const result = await db.query(query, values);
    return result.rows;
  }

  static async getSummary(userId) {
    const query = `
      SELECT type, COALESCE(SUM(amount), 0) as total
      FROM transactions
      WHERE user_id = $1 AND is_deleted = false
      GROUP BY type;
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
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
    
    if (period === 'daily') {
      format = 'YYYY-MM-DD';
      limit = 7;
    } else if (period === 'weekly') {
      format = 'IYYY-"W"IW';
      limit = 8;
    } else if (period === 'yearly') {
      format = 'YYYY';
      limit = 5;
    }

    const query = `
      SELECT TO_CHAR(date, '${format}') as period_name, COALESCE(SUM(amount), 0) as amount
      FROM transactions
      WHERE user_id = $1 AND type = 'expense' AND is_deleted = false
      GROUP BY period_name
      ORDER BY period_name ASC
      LIMIT ${limit};
    `;
    const result = await db.query(query, [userId]);
    return result.rows;
  }

  static async getWalletBalances(userId) {
    const query = `
      SELECT payment_method as name, SUM(CASE WHEN type = 'income' THEN amount ELSE -amount END) as balance
      FROM transactions
      WHERE user_id = $1 AND is_deleted = false
      GROUP BY payment_method;
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
    const { amount, type, category, note, paymentMethod, date } = updates;
    const query = `
      UPDATE transactions
      SET amount = COALESCE($1, amount),
          type = COALESCE($2, type),
          category = COALESCE($3, category),
          note = COALESCE($4, note),
          payment_method = COALESCE($5, payment_method),
          date = COALESCE($6, date)
      WHERE id = $7 AND user_id = $8 AND is_deleted = false
      RETURNING *;
    `;
    const values = [amount, type, category, note, paymentMethod, date, id, userId];
    const result = await db.query(query, values);
    return result.rows[0];
  }
}

module.exports = TransactionModel;
