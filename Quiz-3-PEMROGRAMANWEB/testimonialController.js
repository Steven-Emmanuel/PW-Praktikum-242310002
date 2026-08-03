const Testimonial = require('../models/Testimonial');
exports.getAll = async (req, res) => {
  const items = await Testimonial.find();
  res.json(items);
};
exports.create = async (req, res) => {
  const item = await Testimonial.create(req.body);
  res.status(201).json(item);
};
exports.update = async (req, res) => {
  const item = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};
exports.remove = async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
