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
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
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

async function createProduct(title, modelDetails, shortDesc, longDesc, price) {
  if (!isTitle(title) || !isPrice(price) || !isDesc(shortDesc) || !isDesc(longDesc)) return;
  if (typeof modelDetails?.file !== 'string' || typeof price !== 'number') return;
  if (await getProduct({ title })) return;

  return Product.create({ 
    title, 
    modelDetails, 
    shortDescription: shortDesc, 
    longDescription: longDesc,
    price 
  });
}

export default Product;
export { getProducts, getProduct, createProduct };
