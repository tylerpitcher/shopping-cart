import { motion } from 'framer-motion';

import styles from '@/styles/Footer.module.css';
import { textVariant } from '@/utils/motion';

function Footer() {
  return (
    <motion.footer 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={textVariant()}
      className={styles.copyright}
    >
      &copy; 2023 Replicar
    </motion.footer>
  );
}

export default Footer;
