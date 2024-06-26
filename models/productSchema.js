// userSchema.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   link: {
    type: String,
    required: true,
  },
   image_url: {
    type: String,
    required: true,
  },
   name: {
    type: String,
    required: true,
  },
   price: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
