import React from 'react';

import Footer from './partials/Footer';
import Header from './partials/Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.main}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
