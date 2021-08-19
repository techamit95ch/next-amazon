import { useEffect } from 'react';
import { StoreProvider } from '../utils/Store';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jsssStyles = document.querySelector('#jss-server-side');

    if (jsssStyles) {
      jsssStyles.parentElement.removeChild(jsssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
