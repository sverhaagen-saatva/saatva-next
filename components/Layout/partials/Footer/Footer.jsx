import React from 'react'

import {
    FooterEmail,
    FooterLinks,
    FooterSocial,
    FooterBottom
} from './partials'

const Footer = () => {
    return (
        <section className="section footer u-paddingTop u-paddingBottom--none">
            <div className="container">
                <div className="row row--center-xs">

                    <div className="col col--xs-10 col--md-4 col--lg-4 u-marginBottom--lg col--order-first-xs col--order-last-md col--order-first-lg">
                        <FooterEmail />
                    </div>
                    <div className="col col--xs-12 col--md-8 col--lg-12">
                        <FooterLinks />
                    </div>
                    <div className="col col--xs-12 col--md-4 u-marginBottom--lg col--order-last-md col--order-reset-lg">
                        <FooterSocial />
                    </div>
                </div>
            </div>
            <div className="footer__bottomContainer">
                <div className="container--col">
                    <FooterBottom />
                </div>
            </div>
        </section>
    )
}

export default Footer
