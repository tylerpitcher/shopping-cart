import Stripe from 'stripe';

import { getProduct } from '@/models/productModel';

export async function getCheckoutSession(id) {
  const stripe = Stripe(process.env.STRIPE_KEY);
  
  try {
    const session = await stripe.checkout.sessions.retrieve(
      id, 
      { expand: ['line_items'] }
    );
  
    const products = await Promise.all(
      session.line_items.data.map(async (product) => {
        const data = await getProduct({ priceId: product.price.id });
        return { 
          title: data.title, 
          quantity: product.quantity,
          price: data.price,
          priceId: product.price.id
        };
      })
    );

    return { success: session.status === "complete", products };

  } catch (error) {
    return undefined;
  }
}

async function handleGetRequest(req, res) {
  const data = await getCheckoutSession(req.query?.session);
  
  if (!data) {
    return res.status(400).end();
  }

  return res.json(data);
}

async function handler(req, res) {
  switch(req.method) {
    case 'GET':
      return await handleGetRequest(req, res);
    default:
      return res.status(405).end();
  }
}

export default handler;
