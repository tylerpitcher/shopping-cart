import ProductListItem from '@/components/product/ProductListItem';
import styles from '@/styles/ProductList.module.css';

function ProductList({ products }) {
  return (
    <section id='products' className={styles.list}>
      <div className={styles.sectionHeader}>
        <p>The best of the very best</p>
        <h2>Our Products.</h2>
      </div>
      <ul className='simpleList'>
        {products.map((product) => (
          <ProductListItem 
            key={product.title}
            product={product}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
