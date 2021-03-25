import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ROOT_ASSET_PATH } from '@config/globals'
import Image from 'next/image'

const Hero = ({
    className,
    children,
    ...other
}) => {
    const backgroundPath = `${ROOT_ASSET_PATH}/images/home/hero-mattress-lineup/d-hero-mattress-lineup@1x.jpg`
    const classes = classNames('section section--alt hero', className)

    return (
        <section className={classes} {...other}>
            <Image
                src={backgroundPath}
                alt="Hero matttress"
                layout="fill"
                objectFit='cover'
            />
            <div className="container">
                {children}
            </div>
        </section>
    )
}

Hero.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

Hero.defaultProps = {
    children: '',
}

export default Hero