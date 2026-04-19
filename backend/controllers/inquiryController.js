const InquiryModel = require('../models/inquiryModel');

exports.submitInquiry = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const inquiry = await InquiryModel.createInquiry(req.user.id, message);
    res.status(201).json(inquiry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getMyInquiries = async (req, res) => {
  try {
    const inquiries = await InquiryModel.getByUserId(req.user.id);
    res.json(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAdminInquiries = async (req, res) => {
  try {
    const inquiries = await InquiryModel.getAll();
    res.json(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.replyToInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    if (!reply) return res.status(400).json({ error: 'Reply is required' });

    const inquiry = await InquiryModel.reply(id, reply);
    res.json(inquiry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
