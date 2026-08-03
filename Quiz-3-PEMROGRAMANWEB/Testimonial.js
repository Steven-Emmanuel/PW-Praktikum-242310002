const mongoose = require('mongoose');
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  message: { type: String, required: true },
  rating: { type: Number, default: 5 }
});
module.exports = mongoose.model('Testimonial', testimonialSchema);
