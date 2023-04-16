import Link from 'next/link'

import useCartStore from '@/stores/cartStore';
import styles from '@/styles/Header.module.css';
import baseStyles from '@/styles/Base.module.css';

function Header({ links  }) {
  const { count } = useCartStore();

  return (
    <header className={styles.header}>
      <Link href='/' className={styles.name}>RepliCar</Link>

      <nav>
        <ul className={`${styles.navList} ${baseStyles.list}`}>
          {links?.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={styles.navLink} 
                scroll={false}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            <Link href={'/cart'} className={styles.navLink}>
              Cart ({count})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
