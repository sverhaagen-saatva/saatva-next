import { Logo, Menu, MenuIcons } from '../Header/subcomponents'
import styles from './Header.module.scss'

const Header = () => {
    return (<header className="header" id="sticky-header">
                <div>
                    <div className={styles.nav}>
                        <div className={styles.nav__wrapper}>
                            <div className={styles.nav__content}>
                                <div className={`${styles.container} ${styles.nav__container}`}>
                                    <Logo/>
                                    <Menu/>
                                    <MenuIcons/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </header>)
}

export default Header
