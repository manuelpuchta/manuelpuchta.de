import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.goatcounter) return;

      if (window.goatcounter.count) {
        window.goatcounter.count({
          path: url,
          event: false,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
