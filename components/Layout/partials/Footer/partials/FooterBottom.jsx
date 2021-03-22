import React from 'react'
// import { Icon } from 'saatva_pattern_library'

const FooterBottom = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="row">
            <div className="col col--xs-12 col--md-4 u-marginVertical--xs u-flexJustify--center">
                <p>Copyright &copy; 2010-{currentYear} Saatva, Inc.</p>
            </div>
            <div className="col col--xs-12 col--md-4 u-flexJustify--center">
                <a href='/' title="Saatva Logo">
                    {/* <Icon className='footer__saatvaLogo' name='saatvaLogo' description="Saatva Logo" alt="Saatva Logo" titleId="saatvaLogo" /> */}
                </a>
            </div>
            <div className="col col--xs-12 col--md-4 u-marginVertical--xs u-flexDirection--row u-flexAlign--center">
                <a href='/terms' className="u-marginRight--md">
                    Terms of Use
                </a>

                <a href='/privacy-policy'>
                    Privacy Policy
                </a>
            </div>
        </div>
    )
}

export default FooterBottom
