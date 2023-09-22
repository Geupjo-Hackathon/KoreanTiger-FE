import Head from 'next/head';

import HomePage from '@components/home/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiger::Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
