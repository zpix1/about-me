import Head from 'next/head';
import favico from "../public/favicon.ico";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Ivan's personal page</title>
      <link rel="shortcut icon" href="/about-me/favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
