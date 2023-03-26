import { motion } from 'framer-motion';

import styles from '@/styles/ProductList.module.css';
import { slideIn } from '@/utils/motion';
import ModelCanvas from '../ModelCanvas';

function ProductListItem({ product }) {
  return (
    <motion.li
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={styles.item}
    >
      <motion.h3 variants={slideIn('left', 'tween', 0.2, 1)}>{product.title}</motion.h3>

      <div className={styles.infoWrapper}>
        <motion.div 
          variants={slideIn('left', 'tween', 0.2, 1)}
          className={styles.description}
        >
          <p>
            {product.shortDescription}
          </p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{product.price.toPriceString()}</span>
            <a className={styles.buyLink} href={`/${product._id}`}>BUY</a>
          </div>
        </motion.div>

        <motion.div 
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={styles.model}
        >
          <ModelCanvas modelDetails={product.modelDetails}/>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default ProductListItem;
