import classNames from 'classnames'
import Hero from '@components/Hero/Hero'
import Button from '@components/Button/Button'

const HomeHero = ({

}) => {

    const headerClasses = classNames('hero__content--home col', 'col--xs-12')

    return (
        <header>
            <Hero
                className={`hero--home`}
                progressiveImage
                imageFilename={'hero-mattress-lineup'}
                imageFolderPath={'/home/hero-mattress-lineup'}
            >
                <div className='row'>
                    <div className={headerClasses}>
                        <h1 className={`t-heading1 hero__heading hero__heading--home col--xs-12`}>
                            Pure comfort without the&nbsp;markups
                    </h1>
                    </div>
                </div>
                <div className="row">
                    <div className='hero__content--home col col--xs-12'>
                        <h3 className="t-heading3 hero__subheading u-hidden--md-down col--md-8 col--lg-7">
                            Discover pure sleep bliss with our handcrafted mattresses—at prices that won't keep you up at night.
                </h3>
                        <Button kind="primary" className="btn btn--primary u-margin--center" href={'/mattresses'}>
                            Shop now
                </Button>
                    </div>

                </div>
            </Hero>
        </header>
    )
}

export default HomeHero
//btn btn--primary btn--primary--cta u-marginTop--sm u-marginBottom--xs