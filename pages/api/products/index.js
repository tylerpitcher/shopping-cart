import dbConnect from '@/utils/dbConnect';
import Product from '@/models/productModel';

dbConnect();

export function getProducts() {
  return Product.find({});
}

export function createProduct(details) {
  return Product.create(details);
}

export default async function handler(req, res) {
  switch(req.method) {
    case 'GET':
      const products = await getProducts();
      return res.status(200).json(products);
    default:
      return res.status(405);
  }
}