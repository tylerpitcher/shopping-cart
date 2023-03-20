import styles from '@/styles/Header.module.css';

function Header() {
  const links = [
    { text: 'About', href: '#about' },
    { text: 'Products', href: '#products' },
    { text: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={styles.header}>
      <span className={styles.name}>Replicar</span>
      <nav>
        <ul className={`${styles.navList} simpleList`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
