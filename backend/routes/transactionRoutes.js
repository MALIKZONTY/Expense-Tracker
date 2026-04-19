const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, transactionController.addTransaction);
router.get('/', auth, transactionController.getTransactions);
router.get('/dashboard', auth, transactionController.getDashboard);
router.delete('/:id', auth, transactionController.deleteTransaction);
router.put('/:id', auth, transactionController.updateTransaction);

module.exports = router;
