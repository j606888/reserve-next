import { Provider } from 'react-redux';
import { store } from '@/app/store';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>);
}
