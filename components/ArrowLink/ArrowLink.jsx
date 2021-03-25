import PropTypes from 'prop-types';
import classNames from 'classnames';
import AbsoluteAnchor from '@components/AbsoluteAnchor';
// import { Icon } from 'saatva_pattern_library';

const ArrowLink = ({
    className,
    isUnderlined,
    url,
    value,
    size,
    target,
    onClick
}) => {
    const classes = classNames('arrowLink', {
        'arrowLink--underlined': isUnderlined,
        'arrowLink--sm': size === 'sm',
        'arrowLink--md': size === 'md',
        'arrowLink--lg': size === 'lg'
    }, className);

    // const getIconWidth = (size) => {
    //     let iconWidth
    //     if (size === 'sm') {
    //         iconWidth = '10'
    //     } else if (size === 'md') {
    //         iconWidth = '12'
    //     } else if (size === 'lg') {
    //         iconWidth = '14'
    //     } else {
    //         iconWidth = '12'
    //     }
    //     return iconWidth
    // }

    // const iconWidth = getIconWidth(size);

    // const arrowIcon = <Icon
    //     className="arrowLink__arrow"
    //     height="10"
    //     iconList={null}
    //     name="chevron-right"
    //     role="img"
    //     width={iconWidth}
    //     alt="Chevron Right"
    //     description="Chevron Right"
    //     titleId="arrowLinkIcon" />;

    return (
        <AbsoluteAnchor path={url} className={classes} target={target} onClick={onClick}>
            {value}
            {/* {arrowIcon} */}
        </AbsoluteAnchor>
    )
}

ArrowLink.propTypes = {
    className: PropTypes.string,
    isUnderlined: PropTypes.bool,
    url: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func
}

ArrowLink.defaultProps = {
    target: '_self'
}

export default ArrowLink;
