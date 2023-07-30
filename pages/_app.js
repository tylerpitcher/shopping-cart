import { useEffect } from 'react';

import useScreenStore from '@/stores/screenStore';
import '@/utils/toPriceString';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  const { isMobile } = useScreenStore();

  useEffect(() => {
    isMobile();
    window.addEventListener('resize', isMobile);
  }, [isMobile]);


  return (
    <Component {...pageProps} />
  );
}

export default App;
