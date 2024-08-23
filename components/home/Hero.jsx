import getConfig from 'next/config';

import ModelCanvas from '@/components/base/ModelCanvas';
import useScreenStore from '@/stores/screenStore';
import styles from '@/styles/Hero.module.css';

function Hero() {
  const { publicRuntimeConfig: { basePath } } = getConfig();
  const { mobile } = useScreenStore();

  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <div className={`${styles.heroCardOverlay} ${styles.heroCardText}`}>
          <div className={styles.trailWrapper}>
            <div className={styles.dot}/>
            <div className={styles.trail}/>
          </div>
          <div>
            <h1 className={styles.title}>Welcome{!mobile && <span>&#44;</span>}</h1>
            <p className={styles.text}>you&apos;ll love our replica models</p>
          </div>
        </div>
        <ModelCanvas
          autoRotate={true}
          modelDetails={{
            file: `tank/scene.gltf`,
            scale: 0.008,
            rotation: 270
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
