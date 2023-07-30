import useCartStore from '@/stores/cartStore';
import styles from '@/styles/Cart.module.css';

function CartItem({ id, item }) {
  const { add, remove } = useCartStore();

  return (
    <li>
      <h4>{item.title}</h4>
      <div className={styles.flexBetween}>
        <span>{item.price.toPriceString()}</span>

        <div className={styles.quantityControls}>
          <button
            className={styles.btn}
            onClick={() => add({ priceId: id, ...item })}
          >
            +
          </button>
          {item.quantity}
          <button
            className={`${styles.btn} ${styles.removeBtn}`}
            onClick={() => remove({ priceId: id, ...item })}
          >
            &minus;
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
