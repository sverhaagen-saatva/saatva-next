import PropTypes from 'prop-types';
import classNames from 'classnames';
import AbsoluteAnchor from '@components/AbsoluteAnchor';

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

    return (
        <AbsoluteAnchor path={url} className={classes} target={target} onClick={onClick}>
            {value}
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
