import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    < >

      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      
      <div className={styles.container}>
        <Header />
        
        <Container className={styles.content}>
          {props.children}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
