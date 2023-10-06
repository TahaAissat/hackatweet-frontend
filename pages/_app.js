import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import users from '../reducers/users';
import tweets from '../reducers/tweets';
import hashtagtweets from '../reducers/hashtagtweets';

const store = configureStore({
  reducer : {users,tweets,hashtagtweets}
})

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
