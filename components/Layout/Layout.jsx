import Footer from './partials/Footer';
import PromotionBanner from '@components/PromotionBanner';
import Header from './partials/Header';
import { Promotion } from '../../context' 

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.main}>
    <Promotion.Provider>
      <PromotionBanner />
    </Promotion.Provider>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;
