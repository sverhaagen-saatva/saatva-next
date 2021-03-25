import { Promotion } from '../../context'
import { useContext } from 'react'
import styles from './PromotionBanner.module.scss'
import { SalesTag, Close } from './subcomponents/images'

const PromotionBanner = () => {
    const { promotion, promotionActions } = useContext(Promotion.Context)

    const tooglePromotion = () => {
        promotionActions.UpdatePromotion(!promotion.showBanner)
    }

    return (
        <>
            { promotion.showBanner &&
                <section className={styles.banner} data-analytics-id="banner-default">
                    <div className={styles.banner__container}>
                        <div className={styles.banner__dialog} role="dialog" aria-labelledby="bannerTitle" aria-describedby="">
                            <div className={styles.banner__content}>
                                <span className={styles.banner__salesTag}>
                                    <SalesTag/>
                                </span>
                                <span>The Spring Sale has sprung! Get $200 off any purchase of $1,000 or more before midnight Monday 3/29.</span>
                                <span className={styles.banner__link}>Learn&nbsp;More</span>
                            </div>
                            <button className={styles.banner__close} onClick={() => tooglePromotion()}>
                                <Close/>
                            </button>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default PromotionBanner
