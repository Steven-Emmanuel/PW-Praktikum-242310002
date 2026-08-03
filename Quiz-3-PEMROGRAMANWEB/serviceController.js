const Service = require('../models/Service');
exports.getAll = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};
exports.create = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
};
exports.update = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!service) return res.status(404).json({ message: 'Not found' });
  res.json(service);
};
exports.remove = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
