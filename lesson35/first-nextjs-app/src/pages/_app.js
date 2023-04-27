import React,{useEffect} from 'react';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
//import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}