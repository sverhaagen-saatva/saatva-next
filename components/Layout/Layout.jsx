import Footer from './partials/Footer';
import PromotionBanner from '@components/PromotionBanner';
import Header from './partials/Header';
import { Promotion, Translations } from '@context'

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.main}>
    <Promotion.Provider>
      <PromotionBanner />
    </Promotion.Provider>
    <Header />
      <Translations.Provider>
        {children}
      </Translations.Provider>
    <Footer />
  </div>
);

export default Layout;
