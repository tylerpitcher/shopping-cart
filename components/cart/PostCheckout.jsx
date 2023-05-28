import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

import styles from '@/styles/Cart.module.css';
import baseStyles from '@/styles/Base.module.css';
import MotionSection from '@/components/base/MotionSection';
import Header from '@/components/base/Header';
import useCartStore from '@/stores/cartStore';
import CartItem from '@/components/cart/CartItem';

function FailedCheckout({ products }) {
  const { items, count, add, clear } = useCartStore();
  const router = useRouter();

  const checkout = async () => {
    if (!count) return;

    const { data } = await axios.post('/api/checkout', { items });
    if (data.url) router.push(data.url);
  }

  useEffect(() => {
    clear();
    products.forEach((product) => add(product));
  }, [products]);

  return (
    <div className={`${baseStyles.card} ${styles.cartCard}`}>
      <h3>We&#39;re sorry&#44;</h3>
      <p>the checkout failed</p>
      <br/>

      <ul className={baseStyles.list}>
        {Object.entries(items).map(([key, item]) => (
          <CartItem key={key} id={key} item={item}/>
        ))}
      </ul>

      <button 
        className={`${baseStyles.btn} ${styles.orderBtn}`}
        onClick={checkout}
        disabled={!count}
      >
        Try Again
      </button>
    </div>
  );
}

function SuccessfulCheckout({ products }) {
  return (
    <div className={`${baseStyles.card} ${styles.cartCard}`}>
      <h3>Congratulations&#44;</h3>
      <p>we know you&#39;ll love your purchase</p>
      <br/>

      <ul className={baseStyles.list}>
        {products.map((product) => (
          <li>
            {product.title} &times; {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostCheckout({ success, products }) {
  return (
    <div>
      <Header links={[{ text: 'Products', href: '/' }]}/>
      <MotionSection className={`${baseStyles.section} ${styles.center}`}>
        {
          success 
            ? <SuccessfulCheckout products={products}/>
            : <FailedCheckout products={products}/>
        }
      </MotionSection>
    </div>
  );
}

export default PostCheckout;
