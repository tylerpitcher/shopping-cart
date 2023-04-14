import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <div className={styles.infoWrapper}>
        <motion.div 
          variants={slideIn('left', 'tween', 0.2, 1)}
          className={styles.description}
        >
          <h3>{product.title}</h3>
          <p>
            {product.shortDescription}
          </p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{product.price.toPriceString()}</span>
            <Link className={styles.buyLink} href={`/${product._id}`}>BUY</Link>
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
