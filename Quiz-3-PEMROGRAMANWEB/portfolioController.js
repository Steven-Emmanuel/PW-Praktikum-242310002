const Portfolio = require('../models/Portfolio');
exports.getAll = async (req, res) => {
  const items = await Portfolio.find();
  res.json(items);
};
exports.create = async (req, res) => {
  const item = await Portfolio.create(req.body);
  res.status(201).json(item);
};
exports.update = async (req, res) => {
  const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};
exports.remove = async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
