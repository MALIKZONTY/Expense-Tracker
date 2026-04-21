const db = require('../config/db');

class InquiryModel {
  static async createInquiry(userId, message, guestName = null, guestEmail = null) {
    const result = await db.query(
      'INSERT INTO inquiries (user_id, message, guest_name, guest_email) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, message, guestName, guestEmail]
    );
    return result.rows[0];
  }

  static async getByUserId(userId) {
    const result = await db.query(
      'SELECT * FROM inquiries WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    return result.rows;
  }

  static async getAll() {
    const result = await db.query(`
      SELECT 
        i.*, 
        u.email as user_email,
        COALESCE(i.guest_name, u.email) as display_name,
        COALESCE(i.guest_email, u.email) as display_email
      FROM inquiries i
      LEFT JOIN users u ON i.user_id = u.id
      ORDER BY 
        CASE WHEN i.status = 'pending' THEN 0 ELSE 1 END,
        i.created_at DESC
    `);
    return result.rows;
  }

  static async reply(id, reply) {
    const result = await db.query(
      'UPDATE inquiries SET reply = $1, status = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [reply, 'answered', id]
    );
    return result.rows[0];
  }
}

module.exports = InquiryModel;
