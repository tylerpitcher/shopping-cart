import ProductListItem from '@/components/product/ProductListItem';
import styles from '@/styles/ProductList.module.css';
import baseStyles from '@/styles/Base.module.css';
import MotionSection from '@/components/base/MotionSection';

function ProductList({ products }) {
  return (
    <MotionSection id='products' className={baseStyles.section}>
      <div className={styles.sectionHeader}>
        <p>The best of the very best</p>
        <h2>Our Products.</h2>
      </div>

      <ul className={baseStyles.list}>
        {products.map((product) => (
          <ProductListItem 
            key={product.title}
            product={product}
          />
        ))}
      </ul>
    </MotionSection>
  );
}

export default ProductList;
