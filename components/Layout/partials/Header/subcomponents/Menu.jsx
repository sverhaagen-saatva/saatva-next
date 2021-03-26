import classNames from 'classnames'
import { menuLists } from '../data'
import styles from '../Header.module.scss'
import {
    ROOT_ASSET_PATH
} from '../../../../../config/globals'
import Image from 'next/image'
import { MenuSection } from './'
import { useState } from 'react'


const Menu = () => {
    const defaultImage = menuLists[0].defaultImage
    const [imgCaption, setImgCaption] = useState({title: null, subtitle: null, path: `${ROOT_ASSET_PATH}/images/menu/${defaultImage}`})

    const linkItemContainerClasses = (menu) => {
        const cssClasses = classNames({
            [styles.nav__linkItem__nav__linkItemContainerFeature]: menu.featured,
            [styles.nav__linkItem__nav__linkItemContainer]: true
        })

        return cssClasses
    }

    const chevornImage = () => {
        return <svg name="chevron-right" class="icon icon--chevron-right arrowLink__arrow" role="img" alt="Chevron Right" description="Chevron Right" viewBox="0 0 10 20" width="12" height="10" aria-labelledby="arrowLinkIcon"><title id="arrowLinkIcon">Chevron Right</title><polyline points="2,2 8,10 8,10 2,18"></polyline></svg>

    }

    return (
        <div className={styles.nav__navigation}>
            <ul className={styles.nav__linkList}>
                {menuLists.map(menu =>
                    <div key={`${menu.title}-div`}>
                        <li className={`${styles.nav__linkItem}`} key={`${menu.title}-li`}>
                            <a className={linkItemContainerClasses(menu)} href="/mattresses/saatva-classic" key={`${menu.title}-link`} >{menu.title}</a>
                            <div className={styles.nav__subItemListContainer} >
                                <div className={styles.navPannel__container} >
                                    <div className={styles.navPannel__row} >
                                        <div className={styles.navPannel__imgContainer} >
                                            <Image
                                                className='navPannel__image'
                                                src={imgCaption.path}
                                                alt="Matress"
                                                width={349}
                                                height={172}
                                            />
                                            { imgCaption.title && imgCaption.subtitle && 
                                                <div className={styles.navPanel__imgCaption}>
                                                    <span className={styles.navPanel__imgCaptionTitle}>{imgCaption.title}</span>
                                                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                                    <span className="navPanel__subtitle">{imgCaption.subtitle}</span>
                                                </div>
                                            }
                                        </div>
                                        <div className={styles.navPannel__sections} >
                                            <div className={styles.navPannel__sectionsContainer} >
                                                {menu.subCategories.map(subCategory =>
                                                    <MenuSection key={`${subCategory.title}-section`} 
                                                        section={subCategory} 
                                                        setImgCaption={setImgCaption}    
                                                    />    
                                                )}
                                            </div>
                                            <div className={styles.navPanel__extraLinks}>
                                                    <div className={styles.navPanel__extraLink}>
                                                        <a className={styles.navPanel__arrowLink} href="/mattresses/saatva-classic" target="_self">Mattress Quiz
                                                            {chevornImage()}
                                                        </a>
                                                    </div>
                                                    <div className={styles.navPanel__extraLink}>
                                                        <a className={styles.navPanel__arrowLink} href="/mattresses/saatva-classic" target="_self">Compare Mattresses
                                                            {chevornImage()}
                                                        </a>
                                                    </div>
                                                    <div className={styles.navPanel__extraLink}>
                                                        <a className={styles.navPanel__arrowLink} href="/mattresses/saatva-classic" target="_self">View All Mattresses
                                                            {chevornImage()}
                                                        </a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </li>
                    </div>        
                )}
            </ul>
        </div>
    )
}

export default Menu
