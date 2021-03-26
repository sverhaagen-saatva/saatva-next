import Icon from '@components/Icon/Icon'
import classNames from 'classnames'
import styles from './DeliveryAndSetup.module.scss'

const DeliveryAndSetup = () => {
    return (
        <section id="delivery" className={classNames('section u-hidden--lg-down')}>
            <div className={styles.deliveryAndSetup}>
                <div className={styles.slide}>
                    <div className={styles.valueProp}>
                        <div className={styles.iconWrapper}>
                            <Icon name="trial" alt="Trial icon" titleId="homeTrialIcon" description="Home Trial" className={styles.icon} />
                        </div>
                        <h3 className={styles.heading}>180-night home trial</h3>
                        <p className={styles.description}>We never pressure you to make up your mind quickly. Enjoy your Saatva Classic at home for 180 nights.</p>
                    </div>

                    <div className={styles.valueProp}>
                        <div className={styles.iconWrapper}>
                            <Icon name="delivery" alt="Concierge delivery icon" titleId="conciergeDeliveryIcon" description="Consierge Delivery" className={styles.icon} />
                        </div>
                        <h3 className={styles.heading}>180-night home trial</h3>
                        <p className={styles.description}>Sit back and relax while we do all the work. We’ll hand-deliver the Saatva Classic to the room of your choice.</p>
                    </div>

                    <div className={styles.valueProp}>
                        <div className={styles.iconWrapper}>
                            <Icon name="warranty" alt="Warranty removal icon" titleId="warrantyRemovalIcon" description="Warranty Removal" className={styles.icon} />
                        </div>
                        <h3 className={styles.heading}>180-night home trial</h3>
                        <p className={styles.description}>We stand by the quality of our products. That’s why your Saatva Classic comes with a 15-year non-prorated warranty.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeliveryAndSetup
