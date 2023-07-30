import { motion } from 'framer-motion';

import ProductListItem from '@/components/product/ProductListItem';
import styles from '@/styles/ProductList.module.css';
import baseStyles from '@/styles/Base.module.css';
import MotionSection from '@/components/base/MotionSection';
import { textVariant } from '@/utils/motion';
import useScreenStore from '@/stores/screenStore';

function ProductList({ products }) {
  const { mobile } = useScreenStore();

  return (
    <MotionSection id='products' className={baseStyles.section}>
      {mobile 
        ? <div className={styles.sectionHeader}>
            <p>The best of the very best</p>
            <h2>Our Products.</h2>
          </div>
        : <motion.div 
            variants={mobile ? {} : textVariant()}
            className={styles.sectionHeader}
          >
            <p>The best of the very best</p>
            <h2>Our Products.</h2>
          </motion.div>
      }

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
