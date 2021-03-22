import React from 'react'
import EmailSubscriptionForm from '../../../../EmailSubscriptionForm/EmailSubscriptionForm'

const EmailSection = () => {
    return (
        <div className="footer__email">
            <h2 className="footer__emailHeader t-color--white u-marginBottom--none">Be the first to know!</h2>
            <p className="footer__emailSubheader t-footer u-marginBottom--sm">Get access to our latest sales, product news, and sleep tips.</p>
            <div className="footerSubscriptionForm">
                <EmailSubscriptionForm ctaCopy="Sign Up" emailKey="SaatvaFoot" />
            </div>
        </div>
    )
}

export default EmailSection
