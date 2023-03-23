import styles from '@/styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <div className={styles.heroCardOverlay}>
          <div className={styles.trailWrapper}>
            <div className={styles.dot}/>
            <div className={styles.trail}/>
          </div>
          <div>
            <h1>Welcome&#44;</h1>
            <p className={styles.text}>you&apos;ll love our replica models</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
