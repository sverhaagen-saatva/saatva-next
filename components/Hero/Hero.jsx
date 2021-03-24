import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Hero.module.scss'
import {
    ROOT_ASSET_PATH
} from '../../config/globals'
import Image from 'next/image'


const Hero = ({
    className,
    children,
    progressiveImage,
    imageFolderPath,
    imageFilename,
    ...other
}) => {
    let backgroundPath = ''
    if (progressiveImage) {
        const ROOT_ASSET_IMAGE_PATH = `${ROOT_ASSET_PATH}/images`
        backgroundPath = `${ROOT_ASSET_IMAGE_PATH}${imageFolderPath}/d-${imageFilename}@1x.jpg`
    }
    const classes = classNames('section section--alt hero', className)

    return (
        <section className={classes} {...other}>
            <Image
                src={backgroundPath}
                alt="Picture of the author"
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
    progressiveImage: PropTypes.bool,
    imageFolderPath: PropTypes.string,
    imageFilename: PropTypes.string,
}

Hero.defaultProps = {
    children: '',
    progressiveImage: false
}

export default Hero