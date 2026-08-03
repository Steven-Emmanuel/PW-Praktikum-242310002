const Contact = require('../models/Contact');
exports.submit = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({ message: 'Message sent', data: contact });
};
exports.getAll = async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
};
