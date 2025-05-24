const emailService = require('../../services/emailService');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, type, message } = req.body;
    await emailService.sendContactEmail({ name, email, phone, type, message });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send contact form' });
  }
};
