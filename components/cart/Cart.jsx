import { useRouter } from 'next/router';
import getConfig from 'next/config';
import axios from 'axios';

import Header from '@/components/base/Header';
import styles from '@/styles/Cart.module.css';
import baseStyles from '@/styles/Base.module.css';
import MotionSection from '@/components/base/MotionSection';
import useCartStore from '@/stores/cartStore';
import CartItem from '@/components/cart/CartItem';

function EmptyMessage() {
  return (
    <div 
      className={`${baseStyles.card} ${styles.cartCard} ${styles.center}`}
      style={{ height: '250px' }} 
    >
      <h3>Your cart is empty.</h3>
    </div>
  );
}

function Cart() {
  const { publicRuntimeConfig: { basePath } } = getConfig();
  const { items } = useCartStore();
  const router = useRouter();

  const checkout = async () => {
    const { data } = await axios.post(`${basePath}/api/checkout`, { items });
    if (data.url) router.push(data.url);
  };

  return (
    <div>
      <Header links={[{ text: 'Products', href: '/' }]}/>
      <MotionSection className={`${baseStyles.section} ${styles.center}`}>
        {
          Object.keys(items).length ?
            <div className={`${baseStyles.card} ${styles.cartCard}`}>
              <br/>

              <ul className={baseStyles.list}>
                {Object.entries(items).map(([key, item]) => (
                  <CartItem key={key} id={key} item={item}/>
                ))}
              </ul>

              <button 
                className={`${baseStyles.btn} ${styles.orderBtn}`}
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          :
          <EmptyMessage/>
        }
      </MotionSection>
    </div>
  );
}

export default Cart;
