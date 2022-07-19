import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* // Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Dev</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
