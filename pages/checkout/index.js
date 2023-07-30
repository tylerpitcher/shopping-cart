import safeSerialize from '@/utils/safeSerialize';
import { getCheckoutSession } from '@/pages/api/checkout/[session]';
import PostCheckout from '@/components/cart/PostCheckout';

export async function getServerSideProps(context) {
  const data = await getCheckoutSession(context.query?.session);

  if (!data) return {
    redirect: { destination: '/' } 
  };
  
  return {
    props: safeSerialize(data)
  };
}

export default PostCheckout;
