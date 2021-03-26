import KlarnaMessaging from '@components/KlarnaMessaging/KlarnaMessaging'
import classNames from 'classnames'
import globals from 'config/globals'
import { format as priceFormat } from '../../utils/price-format'
import styles from './LargePriceDisplay.module.scss'
const LargePriceDisplay = ({
    price
}) => {
    return (
        <div className={classNames(styles.largePriceDisplay)}>
            <p className={classNames(styles.strikeThroughPrice, 'u-marginRight--xs')}>${priceFormat(price - 200)}</p>
            <div className={styles.finalPriceContainer}>
                <span className={styles.finalPriceBefore}>Pay today</span>
                <p className={styles.price}>
                    ${priceFormat(price)}</p>
            </div>
            <div className={styles.or}>
                <p className={styles.orLabel}>or</p>
                <div className={styles.orLine}></div>
            </div>
            {
                price - 200 >= 249
                    ? (
                        <div className={styles.klarnaPriceContainer}>
                            <span className={styles.klarnaPriceBefore}>Or later, as low as</span>
                            <div className={styles.klarnaPriceInner}>
                                <KlarnaMessaging
                                    dataId={globals.KLARNA_MESSAGING_IDS.WITHOUT_ANY_TEXT}
                                    price={price}
                                    className={styles.klarnaPrice} />
                                <span
                                    className="largePriceDisplay__klarnaPriceAfter"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        document.querySelector('.largePriceDisplay__klarnaPrice a').click()
                                        return false
                                    }}>
                                    /mo<br />
                                    with&nbsp;<span className="largePriceDisplay__klarnaLink">Klarna</span>
                                </span>
                            </div>
                        </div>
                    )
                    : (
                        <div className="largePriceDisplay__klarnaQualifyingContainer">
                            Finance options available through Klarna for qualifying purchases of $250 or more. As low as 0.00% APR. <a href="/financing" className="t-link">Learn More</a>
                        </div>
                    )
            }
        </div>
    )
}

export default LargePriceDisplay
