import styles from '@/styles/ProductList.module.css';

function ProductListItem({ product }) {
  return (
    <li className={styles.item}>
      <h3>{product.title}</h3>

      <div className={styles.infoWrapper}>
        <div className={styles.description}>
          <p>
            {product.shortDescription}
          </p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{product.price.toPriceString()}</span>
            <a className={styles.buyLink} href={`/${product._id}`}>BUY</a>
          </div>
        </div>

        <div className={styles.model}>

        </div>
      </div>
    </li>
  );
}

export default ProductListItem;
