const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Access denied. Admin only.' });
  }
};

// User routes
router.post('/public', inquiryController.submitPublicInquiry);
router.post('/', authMiddleware, inquiryController.submitInquiry);
router.get('/my', authMiddleware, inquiryController.getMyInquiries);

// Admin routes
router.get('/admin', authMiddleware, isAdmin, inquiryController.getAdminInquiries);
router.put('/admin/:id', authMiddleware, isAdmin, inquiryController.replyToInquiry);

module.exports = router;
