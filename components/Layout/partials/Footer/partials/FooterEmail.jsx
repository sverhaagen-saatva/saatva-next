import React from 'react'

import classNames from 'classnames'
import EmailSubscriptionForm from '../../../../EmailSubscriptionForm/EmailSubscriptionForm'

import styles from '../Footer.module.css'

const EmailSection = () => {
    return (
        <div className="footer__email">
            <h2 className={classNames(styles.emailHeader, 't-color--white', 'u-marginBottom--none')}>
                Be the first to know!
            </h2>
            <p className={classNames('footer__emailSubheader', styles.footerText, 'u-marginBottom--sm')}>
                Get access to our latest sales, product news, and sleep tips.
            </p>
            <div className="footerSubscriptionForm">
                <EmailSubscriptionForm ctaCopy="Sign Up" emailKey="SaatvaFoot" />
            </div>
        </div>
    )
}

export default EmailSection
