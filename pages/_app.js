import Head from 'next/head';
import favico from "../public/favicon.ico";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Ivan's personal page</title>
      <meta name="description" content="Ivan's personal page: software engineering, math, computer security. Contacts and CV." />
      <link rel="shortcut icon" href="/about-me/favicon.ico" type="image/x-icon" />
    </Head> 
    <Component {...pageProps} />
  </>
}

export default MyApp
