import mongoose from 'mongoose';

import { isTitle, isDisc, isPrice } from '@/utils/validators';
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
  fileLocation: {
    type: String,
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

async function createProduct(title, fileLocation, shortDesc, longDesc, price) {
  if (typeof img !== 'string' || !isTitle(title) || !isPrice(price) || !isDisc(shortDesc) || !isDisc(longDesc)) return;
  if (await getProduct({ title })) return;

  return Product.create({ 
    title, 
    fileLocation, 
    shortDescription: shortDesc, 
    longDescription: longDesc,
    price 
  });
}

export default Product;
export { getProducts, getProduct, createProduct };
