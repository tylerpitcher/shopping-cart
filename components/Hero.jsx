import ModelCanvas from '@/components/ModelCanvas';
import styles from '@/styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <div className={`${styles.heroCardOverlay} ${styles.heroCardText}`}>
          <div className={styles.trailWrapper}>
            <div className={styles.dot}/>
            <div className={styles.trail}/>
          </div>
          <div>
            <h1>Welcome&#44;</h1>
            <p className={styles.text}>you&apos;ll love our replica models</p>
          </div>
        </div>
        <ModelCanvas
          modelDetails={{
            file: '/tank/scene.gltf',
            scale: 0.01
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
