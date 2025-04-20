import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bloom Envy</title>
        <meta name="description" content="Experience trends, creativity, and timeless charm at Bloom Envy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
