import PropTypes from 'prop-types'
import classNames from 'classnames'

const ImageViolation = ({
    children,
    modifier,
    className,
    ...other
}) => {
    // generic approach to add additional class names and set default class name
    const classes = classNames({
        'imageViolation': true,
        [`imageViolation--${modifier}`]: modifier
    }, className)

    const imageSrc = `${ROOT_ASSET_PATH}/images/home/service/d-hp-service@1x.jpg`


    return (
        <div className={classes} {...other}>
            <div className="imageViolation__violator">
                <Image
                    src={imageSrc}
                    alt='Saatva Servuce'
                    layout='fill'
                    objectFit='cover'
                />
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}

// define all prop types
ImageViolation.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string.isRequired
}

// set defualt values for props if necessary
ImageViolation.defaultProps = {
    children: ''
}

export default ImageViolation
