import { menuLists } from '../data'
import styles from '../Header.module.scss'

const Menu = () => {
    return (
        <div className={styles.nav__navigation}>
            <ul className={styles.nav__linkList}>
                {menuLists.map(menu =>
                    <div key={`${menu.title}-div`}>
                        <li className={`${styles.nav__linkItem}`} key={`${menu.title}-li`}>
                            <a className={styles.nav__linkItem__nav__linkItemContainer} href="/mattresses" key={`${menu.title}-link`} >{menu.title}</a>
                        </li>
                    </div>        
                )}
            </ul>
        </div>
    )
}

export default Menu
