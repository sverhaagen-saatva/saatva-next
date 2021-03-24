import { Account, Cart, Search } from './images'
import styles from '../Header.module.scss'

const MenuIcons = () => {
    return (
        <ul className={styles.nav__linkList}>
            <li className={`${styles.nav__linkItem} ${styles.nav__linkItem__secondary}`}>
                <a className={styles.nav__linkItem__noBorder} href="tel:+1-877-672-2882" target="_self">1-877-672-2882</a>
            </li>
            <li className={`${styles.nav__linkItem} ${styles.nav__linkItem__secondary}`}>
                <Search/>
            </li>
            <li className={`${styles.nav__linkItem} ${styles.nav__linkItem__secondary}`}>
                <Account/>
            </li>
            <li className={`${styles.nav__linkItem} ${styles.nav__linkItem__secondary} ${styles.nav_linkRelative}`}>
                <Cart/>
                <span className={styles.cartIcon__count}>0</span>
            </li>
        </ul>
    )
}

export default MenuIcons
