import mongoose from 'mongoose';

import { isTitle, isDesc, isPrice } from '@/utils/validators';
import dbConnect from '@/utils/dbConnect';

dbConnect();

const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 64,
    minlength: 3
  },
  modelDetails: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceId: {
    type: String,
    required: true,
  },
}));

function getProducts() {
  return Product.find({});
}

function getProduct(searchQuery) {
  return Product.findOne(searchQuery);
}

async function createProduct(title, modelDetails, desc, price) {
  if (!isTitle(title) || !isPrice(price) || !isDesc(desc)) return;
  if (typeof modelDetails?.file !== 'string' || typeof price !== 'number') return;
  if (await getProduct({ title })) return;

  return Product.create({ 
    title, 
    modelDetails, 
    description: desc, 
    price 
  });
}

export default Product;
export { getProducts, getProduct, createProduct };
