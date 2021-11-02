import { AppProps } from 'next/app';
import { Header } from '../components/Header/index';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  <Header />;
  return <Component {...pageProps} />;
}

export default MyApp;
