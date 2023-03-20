import { getProducts, getProduct } from '@/models/productModel';
import safeSerialize from '@/utils/safeSerialize';
import { isObjectId } from '@/utils/validators';
import Product from '@/components/product/Product';

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map((product) => (
      { params: { productId: product.id } }
    )),
    fallback: 'blocking',
  };
}

export async function getStaticProps(Context) {
  const productId = Context.params.productId;

  if (!isObjectId(productId))
    return { redirect: { destination: '/' } };
  
  const product = await getProduct({ _id: productId });
  if (!product) return { redirect: { destination: '/' } };

  return {
    props: safeSerialize({ product })
  };
}

export default Product;
