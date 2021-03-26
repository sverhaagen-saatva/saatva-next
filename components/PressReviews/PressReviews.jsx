import React from 'react'
import Image from 'next/image'
import {
    ROOT_ASSET_PATH
} from '../../config/globals'
import FlickitySlider from '@components/FlickitySlider/FlickitySlider'

const PressReviews = () => {

    const generalPath = `${ROOT_ASSET_PATH}/icons/home`

    const pressLogos = [
        {
            logo: `${generalPath}/logo_at.svg`,
            alt: 'Apartment Therapy',
            header: '"...you really would have to spend a lot more to beat this..."',
            height: 35,
            width: 150
        },
        {
            logo: `${generalPath}/logo_oprah.svg`,
            alt: 'The Oprah Magazine',
            header: '"Built for a queen(or a full, or a king), covered in organic cotton..."',
            height: 45,
            width: 150
        },
        {
            logo: `${generalPath}/logo_googlecr.svg`,
            alt: 'Google Customer Reviews',
            header: <React.Fragment><img src={`${generalPath}/stars_goog.svg`} alt='4.8 user rating' /><br />4.8 user rating</React.Fragment>,
            height: 46,
            width: 130
        },
        {
            logo: `${generalPath}/logo_big.svg`,
            alt: 'Business Intelligence Group',
            header: '2018 Sustainability Product of the Year',
            height: 42,
            width: 150
        },
        {
            logo: `${generalPath}/logo_ghk.svg`,
            alt: 'Good Housekeeping',
            header: '2020 Best Bedding Award Winner',
            height: 60,
            width: 150
        }
    ]

    const options = {
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true,
        watchCSS: true,
        pageDots: false
    }

    return (
        <div className='section section--alt1'>
            <div className='container'>
                <div className='pressReviews'>
                    <FlickitySlider options={options} className='pressReviews__slider'>
                        {pressLogos.map((logo, index) => {
                            return (
                                <div className='pressReviews__slide' key={index}>
                                    <span className='pressReviews__logoWrapper'>
                                        <Image
                                            key={`press-reviews-${index}`}
                                            src={logo.logo}
                                            className={'pressReviews__logo pressReviews__logo--alt'}
                                            alt={logo.alt}
                                            width={logo.width}
                                            height={logo.height}
                                        />
                                        <p className='pressReviews__info t-bodySm'>
                                            {logo.header}
                                        </p>
                                    </span>
                                </div>

                            )
                        })
                        }
                    </FlickitySlider>
                </div>
            </div>
        </div>
    )

}

export default PressReviews
