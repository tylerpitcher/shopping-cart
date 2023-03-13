import { getProducts } from '@/models/productModel';
import safeSerialize from '@/utils/safeSerialize';
import Home from '@/components/Home';

export async function getStaticProps(Context) {
  const products = await getProducts();

  return {
    props: safeSerialize({ products })
  };
}

export default Home;
