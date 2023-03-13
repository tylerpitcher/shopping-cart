import { getProducts, createProduct } from '@/models/productModel';

async function handleGetRequest(req, res) {
  const products = await getProducts();
  return res.status(200).json(products);
}

async function handlePostRequest(req, res) {
  const { img, title, price } = req.body;
  const product = await createProduct(img, title, price);

  if (!product?.id) return res.status(400).end();

  await res.revalidate('/');
  await res.revalidate('/' + product.id);

  return res.status(201).json(product);
}

async function handler(req, res) {
  switch(req.method) {
    case 'GET':
      return await handleGetRequest(req, res);
    case 'POST':
      return await handlePostRequest(req, res);
    default:
      return res.status(405);
  }
}

export default handler;
