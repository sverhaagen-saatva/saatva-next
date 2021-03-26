import { useState, useContext } from 'react';
import classNames from 'classnames';
import { ROOT_ASSET_PATH } from '@config/globals';
import { Translations } from '@context';
import { Button } from '@components/Button';
import PressQuote from '@components/PressQuote';
import FlickitySlider from '@components/FlickitySlider';
import Image from 'next/image';

const DontTakeItFromUs = () => {
    const { getTranslatedText } = useContext(Translations.Context);

    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = [
        {
            logo: '/assets/mattress/thirdPartyLogos/logo_inc.svg',
            review: '“From its product to its customers, Saatva is doing things differently. In the process, it’s proving that success can be found by thinking outside the boxspring.”',
            altText: 'Inc. Magazine'
        },
        {
            logo: '/assets/mattress/thirdPartyLogos/logo_sleepopolis@2x.png',
            review: '“By combining the coil-on-coil structure with the quilted cover, Saatva has created a feeling akin to that of a mattress in a high-end hotel.”',
            altText: 'Sleepopolis'
        },
        {
            logo: '/assets/mattress/thirdPartyLogos/logo_forbes.svg',
            review: '“...one of the very few online furniture companies in any category that includes ‘White Glove Delivery’ without an upcharge.”',
            altText: 'Forbes'
        },
        {
            logo: '/assets/mattress/thirdPartyLogos/logo_wirecutter@2x.png',
            review: '“If you prefer a memory foam mattress but want something that’s a step above the average bed-in-a-box, the Loom & Leaf is the highest-quality option we’ve tested.”',
            altText: 'Wirecutter'
        }
    ];

    const flickityOptions = {
        wrapAround: true,
        arrowShape: {
            x0: 20,
            x1: 55,
            y1: 50,
            x2: 70,
            y2: 50,
            x3: 35
        }
    }

    const backgroundPath = `${ROOT_ASSET_PATH}/images/home/press-home/d-press-home@2x.jpg`;

    return (
        <section className="section section--lg dontTakeItFromUs">
            <Image
                src={backgroundPath}
                alt="Press Home"
                layout="fill"
                objectFit="cover"
            />
            <div className="container">
                <div className="row u-flexJustify--center">
                    <div className="dontTakeItFromUs__content col col--xs-10 col--md-11 col--lg-8 u-marginBottom--sm">
                        <h2 className="t-heading2 u-marginBottom--2dot5xl t-color--white">{getTranslatedText('labels.dontTakeIt')}</h2>
                        <PressQuote
                            className="u-marginBottom--6xl pressQuote--withSlide pressQuote--dontTakeItFromUs"
                            logo={
                                reviews.map((review, i) => {
                                    const classes = classNames({
                                        'is-active': i === activeIndex
                                    })
                                    return (
                                        <Image
                                           key={i}
                                           className={classes}
                                            src={review.logo}
                                            alt={review.altText}
                                            width={200}
                                            height={100}
                                        />
                                    )
                                })
                            }>
                            <FlickitySlider
                                options={flickityOptions}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                className="flickity__wrapper--inverted">
                                {
                                    reviews.map((content, i) => {
                                        return (
                                            <div className="pressQuote__slide" key={i}>
                                                <div className="pressQuote__slide__description">
                                                    {content.review}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </FlickitySlider>
                        </PressQuote>
                        <Button className="u-marginBottom--xs" kind="primary" href={'/mattresses'}>{getTranslatedText('labels.shopMattresses')}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DontTakeItFromUs;
