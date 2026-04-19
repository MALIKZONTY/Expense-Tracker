const TransactionModel = require('../models/transactionModel');

exports.addTransaction = async (req, res) => {
  try {
    const { amount, type, category, note, date, paymentMethod } = req.body;
    if (!amount || !type || !category || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const transaction = await TransactionModel.createTransaction(req.user.id, amount, type, category, note, date, paymentMethod);
    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate, page = 1, limit = 20 } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { transactions, total } = await TransactionModel.getAllTransactions(req.user.id, {
      type,
      category,
      startDate,
      endDate,
      limit: parseInt(limit),
      offset
    });

    res.json({
      transactions,
      meta: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const { trend } = req.query; // 'daily', 'monthly', 'yearly'
    const summaryData = await TransactionModel.getSummary(req.user.id);
    let totalIncome = 0;
    let totalExpenses = 0;

    summaryData.forEach(row => {
      if (row.type === 'income') totalIncome += Number(row.total);
      if (row.type === 'expense') totalExpenses += Number(row.total);
    });

    const categoryData = await TransactionModel.getExpensesByCategory(req.user.id);
    const dynamicTrend = await TransactionModel.getDynamicTrend(req.user.id, trend || 'monthly');
    const walletBalances = await TransactionModel.getWalletBalances(req.user.id);
    const incomeByMethodData = await TransactionModel.getIncomeByMethod(req.user.id);

    res.json({
      summary: {
        totalIncome,
        totalExpenses,
        remainingBalance: totalIncome - totalExpenses
      },
      charts: {
        categoryPie: categoryData.map(d => ({ name: d.name, value: Number(d.value) })),
        dynamicTrend: dynamicTrend.map(d => ({ period: d.period_name, amount: Number(d.amount) })),
        incomeVsExpense: [
          { name: 'Income', amount: totalIncome },
          { name: 'Expense', amount: totalExpenses }
        ],
        incomeByMethod: incomeByMethodData.map(d => ({ name: d.name, value: Number(d.value) }))
      },
      walletBalances: walletBalances.map(w => ({ name: w.name, balance: Number(w.balance) }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const deleted = await TransactionModel.softDeleteTransaction(req.params.id, req.user.id);
    if (!deleted) return res.status(404).json({ error: 'Transaction not found or already deleted' });
    res.json({ message: 'Transaction deleted successfully', id: deleted.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const updated = await TransactionModel.updateTransaction(req.params.id, req.user.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Transaction not found or already deleted' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
