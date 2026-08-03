const mongoose = require('mongoose');
const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  link: { type: String, default: '' }
});
module.exports = mongoose.model('Portfolio', portfolioSchema);
