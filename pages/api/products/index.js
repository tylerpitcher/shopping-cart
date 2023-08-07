import { getProducts, createProduct } from '@/models/productModel';

async function handleGetRequest(req, res) {
  const products = await getProducts();
  return res.json(products);
}

async function handlePostRequest(req, res) {
  const { title, modelDetails, description, price } = req.body;
  const token = req.headers.authorization;

  if (token?.slice(7) != process.env.TOKEN) return res.status(401).json();
  
  const product = await createProduct(
    title, modelDetails, description, price
  );

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
      return res.status(405).end();
  }
}

export default handler;
