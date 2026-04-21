const InquiryModel = require('../models/inquiryModel');

const guestRateLimit = new Map();

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

exports.submitPublicInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const ip = req.ip || req.headers['x-forwarded-for'];

    // Updated Rate Limiting: 3 messages per 1 minute per IP
    const now = Date.now();
    const limitData = guestRateLimit.get(ip) || { count: 0, startTime: now };

    // Reset window if 1 minute has passed
    if (now - limitData.startTime > 60000) {
      limitData.count = 1;
      limitData.startTime = now;
    } else {
      limitData.count += 1;
    }
    guestRateLimit.set(ip, limitData);

    if (limitData.count > 3) {
       return res.status(429).json({ error: 'Rate limit exceeded. Please wait a minute before sending another message.' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const inquiry = await InquiryModel.createInquiry(null, message, name, email);
    res.status(201).json({ 
      ...inquiry, 
      successMessage: 'We have received your message and will reply to your respective email soon.' 
    });
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
