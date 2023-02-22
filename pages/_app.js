import '../styles/globals.css'
import MyFooter from '../components/footer'
import MyHeader from '../components/header'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { initGA, logPageView } from '../pages/ga';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    router.events.on('routeChangeComplete', logPageView);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, []);
  return (
    <>
      <MyHeader/>
        <Component {...pageProps} />
      <MyFooter/>
    </>
  )
}
