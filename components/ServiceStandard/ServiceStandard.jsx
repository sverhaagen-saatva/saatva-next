import React, { useContext } from 'react'
import FlickitySlider from '@components/FlickitySlider/FlickitySlider'
import ImageViolation from '@components/ImageViolation/ImageViolation'

const ServiceStandard = () => {
    const flickityOptions = {
        wrapAround: false,
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: false,
        watchCSS: true
    }

    const slideTitleClasses = 't-heading4 u-marginBottom--xs'
    const slideClasses = 'serviceStandard__slide col col--xs-12 col--lg-3'

    const cardsContent = [
        {
            title: '24/7 customer support',
            content: 'Our helpful sleep guides are available 24 hours a day, 365 days a year—nights, weekends, and holidays included.'
        },
        {
            title: 'Free white glove delivery',
            content: 'Whether you buy sheets or a mattress, you never have to pay for delivery. It’s free with every order.'
        },
        {
            title: 'Generous home trial',
            content: 'Try our products in the comfort of your own home. If you don’t love them, we’ll gladly refund your money.'
        },
        {
            title: 'Easy financing',
            content: 'We offer convenient monthly payments so you can shop now and pay later. Simply select Klarna at checkout.'
        }
    ]

    const serviceStandardContent =
        <React.Fragment>
            <div className="serviceStandard__container">
                <div className="container">
                    <h2 className="t-heading2 u-marginBottom--2dot5xl t-color--white u-textCenter">The Saatva service standard</h2>
                    <div className="flickity__container">
                        <div className="row">
                            <FlickitySlider
                                className="serviceStandard__slider u-flexJustify--center col col--xs-10 col--offset-xs-1 col--md-5 col--lg-12 col--offset-lg-reset col--lg-asRow"
                                length="4"
                                options={flickityOptions}>
                                {
                                    cardsContent.map((card, index) => {
                                        return (
                                            <div className={slideClasses} key={`home-services-${index}`}>
                                                <div className="serviceStandard__box">
                                                    <h3 className={slideTitleClasses}>{card.title}</h3>
                                                    <p className={'t-bodyMd'}>{card.content}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </FlickitySlider>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    return (
        <section className='section section--trimmed'>
            <ImageViolation
                modifier="serviceStandard">
                {serviceStandardContent}
            </ImageViolation>
        </section>

    )
}

export default ServiceStandard
