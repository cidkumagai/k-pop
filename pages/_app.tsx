import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '../lib/apollo';

import '../styles/globals.css';
import styles from '../styles/App.module.css';
import { store } from '../lib/app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <div className={styles.custom_layout}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </Provider>
  );
}
