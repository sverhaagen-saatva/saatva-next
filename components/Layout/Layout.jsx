import Footer from './partials/Footer';
import Header from './partials/Header';

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.main}>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;
