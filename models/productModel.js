import mongoose from 'mongoose';

import { isTitle, isPrice } from '@/utils/validators';
import dbConnect from '@/utils/dbConnect';

dbConnect();

const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 64,
    minlength: 3
  },
  price: {
    type: Number,
    required: true,
  },
}));

function getProducts() {
  return Product.find({});
}

function getProduct(searchQuery) {
  return Product.findOne(searchQuery);
}

async function createProduct(img, title, price) {
  if (typeof img !== 'string' || !isTitle(title) || !isPrice(price)) return;
  if (await getProduct({ title })) return;

  return Product.create({ img, title, price });
}

export default Product;
export { getProducts, getProduct, createProduct };
