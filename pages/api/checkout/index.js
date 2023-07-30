import Stripe from 'stripe';

export async function createCheckoutSession(items) {
  const orderedItems = Object.entries(items).map(([key, value]) => ({
    price: key,
    quantity: value.quantity,
  }));
  
  const stripe = Stripe(process.env.STRIPE_KEY);
  return await stripe.checkout.sessions.create({
    line_items: orderedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/checkout?session={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.HOST}/checkout?session={CHECKOUT_SESSION_ID}`,
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
  });
}

async function handlePostRequest(req, res) {
  const { items } = req.body;
  const { url } = await createCheckoutSession(items);

  return res.json({ url });
}

async function handler(req, res) {
  switch(req.method) {
    case 'POST':
      return await handlePostRequest(req, res);
    default:
      return res.status(405).end();
  }
}

export default handler;
