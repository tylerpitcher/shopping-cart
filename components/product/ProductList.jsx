import { motion } from 'framer-motion';

import ProductListItem from '@/components/product/ProductListItem';
import styles from '@/styles/ProductList.module.css';
import MotionSection from '@/components/MotionSection';
import { textVariant } from '@/utils/motion';

function ProductList({ products }) {
  return (
    <MotionSection id='products' className={styles.list}>
      <motion.div 
        variants={textVariant()}
        className={styles.sectionHeader}
      >
        <p>The best of the very best</p>
        <h2>Our Products.</h2>
      </motion.div>
      <ul className='simpleList'>
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
