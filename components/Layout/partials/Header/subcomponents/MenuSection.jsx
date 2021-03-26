import classNames from 'classnames'
import {
    ROOT_ASSET_PATH
} from '../../../../../config/globals'
import styles from '../Header.module.scss'

const MenuSection = ({ section, setBackgroundPath, setImgCaption }) => {
    const titleClasses = classNames({
        [styles.navPannel__feature]: section.separator,
        [styles.navPanel__sectionTitle]: true
    })

    const listClasses = classNames({
        [styles.navPannel__feature]: section.separator,
        [styles.navPanel__sectionList]: true
    })

    const imageSrc = (imagePath) => {
        return `${ROOT_ASSET_PATH}/images/menu/${imagePath}`
    }

    return (
        <div className={styles.navPannel__section} >
            <h5 className={titleClasses}>{section.title}</h5>
                <ul className={listClasses}>
                    {section.items.map(item =>
                        <li className={styles.navPanel__listItem}
                            key={`section-li-${item.title}`}
                            onMouseOver={() => setImgCaption({title: item.title, subtitle: item.description, path: imageSrc(item.image)})} 
                            onMouseLeave={() => setImgCaption({title: null, subtitle: null, path: imageSrc('d-nav-mattresses@1x.jpg')}) }>
                            <a className={styles.navPanel__link} href="/mattresses/saatva-classic">
                                <span className={styles.navPanel__span}>{item.title}</span>
                            </a>
                        </li> 
                    )}
                </ul>
        </div>
    )
}

export default MenuSection
