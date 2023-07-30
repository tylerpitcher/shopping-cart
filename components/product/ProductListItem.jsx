import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '@/styles/ProductList.module.css';
import baseStyles from '@/styles/Base.module.css';
import { slideIn } from '@/utils/motion';
import ModelCanvas from '@/components/base/ModelCanvas';
import useScreenStore from '@/stores/screenStore';

function ProductDescription({ product, mobile }) {
  if (mobile) return (
    <div 
      className={`${styles.description} ${baseStyles.justifyText}`}
    >
      <h3>{product.title}</h3>
      <p>
        {product.description}
      </p>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{product.price.toPriceString()}</span>
        <Link className={styles.buyLink} href={`/${product._id}`}>Buy</Link>
      </div>
    </div>
  );

  return (
    <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className={`${styles.description} ${baseStyles.justifyText}`}
    >
      <h3>{product.title}</h3>
      <p>
        {product.description}
      </p>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{product.price.toPriceString()}</span>
        <Link className={styles.buyLink} href={`/${product._id}`}>Buy</Link>
      </div>
    </motion.div>
  );
}

function ProductModel({ product, mobile }) {
  if (mobile) return (
    <div className={styles.model}>
      <ModelCanvas modelDetails={product.modelDetails}/>
    </div>
  );

  return (
    <motion.div 
      variants={slideIn('right', 'tween', 0.2, 1)}
      className={styles.model}
    >
      <ModelCanvas modelDetails={product.modelDetails}/>
    </motion.div>
  );
}

function ProductListItem({ product }) {
  const { mobile } = useScreenStore();

  if (mobile) return (
    <li className={styles.item}>
      <div className={styles.infoWrapper}>
        <ProductDescription product={product} mobile={mobile}/>
        <ProductModel product={product} mobile={mobile}/>
      </div>
    </li>
  );

  return (
    <motion.li
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={styles.item}
    >
      <div className={styles.infoWrapper}>
        <ProductDescription product={product} mobile={mobile}/>
        <ProductModel product={product} mobile={mobile}/>
      </div>
    </motion.li>
  );
}

export default ProductListItem;
