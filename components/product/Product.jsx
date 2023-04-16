import useCartStore from '@/stores/cartStore';
import Header from '@/components/Header';
import ModelCanvas from '@/components/ModelCanvas';
import styles from '@/styles/Product.module.css';
import baseStyles from '@/styles/Base.module.css';
import MotionSection from '@/components/MotionSection';

function Product({ product }) {
  const { title, price } = product;
  const { items, add, remove } = useCartStore();

  const links = [
    { text: 'Products', href: '/' },
  ];

  return (
    <div>
      <Header links={links}/>
      
      <MotionSection className={baseStyles.section}>
        <h3>{title}</h3>
        <span className={styles.price}>{price.toPriceString()}</span>

        <div className={styles.model}>
          <ModelCanvas modelDetails={product.modelDetails}/>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.quantityWrapper}>
            <div className={styles.quantityFlex}>
              <span>Quantity</span>
              <span>{items[product.priceId]?.quantity || 0}</span>
            </div>

            <div className={styles.quantityFlex}>
              <button 
                className={baseStyles.btn}
                onClick={() => add(product)}
              >
                Add
              </button>
              <button 
                className={`${baseStyles.btn} ${baseStyles.removeBtn}`}
                onClick={() => remove(product)} 
                disabled={!items[product.priceId]}
              >
                Remove
              </button>
            </div>
          </div>
          <div className={baseStyles.justifyText}>
            {product.description}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}

export default Product;
