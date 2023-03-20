import styles from '@/styles/ProductList.module.css';

function ProductListItem({ product }) {
  return (
    <li className={styles.item}>
      <h3>{product.title}</h3>

      <div className={styles.infoWrapper}>
        <div className={styles.description}>
          <p>
            Freestart lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh sem. Vivamus pretium erat ac magna sodales, vitae vestibulum lectus vehicula. Proin a libero non velit pharetra venenatis. Ut tristique consectetur turpis ut tincidunt. In feugiat at lectus a accumsan. Sed purus nulla, vehicula vel pulvinar ac, suscipit vel dui. Etiam aliquet ante ut nunc lobortis suscipit sed sit amet nisi. Sed in nisi quam. Aliquam faucibus pretium justo at porttitor. Nam sit amet dapibus mi. Proin elementum ullamcorper ante, id commodo sem lobortis a. Donec sit amet rutrum tortor, quis tristique augue. In hendrerit quam nec lacinia molestie. Praesent et ultrices nisi. Sed nec elementum magna.
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
