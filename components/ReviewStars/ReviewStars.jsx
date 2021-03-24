import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '@components/Icon/Icon'
import styles from './ReviewStars.module.scss'

const MAX_STARS = 5

/**
 * Return the number of star icons required
 * @param {num} count - the number of stars
 * @param {bool} count - whether to render empty stars
 * @example
 * this.renderStars(5, false);
 */
export function renderStars(count, showEmptyStars, onStarClick, onStarEnter) {
    const fullStars = Math.round(count)
    const displayedStars = showEmptyStars ? MAX_STARS : fullStars

    const outputStars = Array.from({ length: displayedStars }, (_, i) => {
        const altText = `${i + 1} Star${(i > 0) ? 's' : ''}`
        const classes = classNames({
            [styles.emptyStar]: i >= fullStars
        }, styles.star)
        return <Icon
            className={classes}
            key={i}
            name="star" alt={altText}
            onClick={onStarClick ? e => onStarClick(e) : undefined}
            onMouseEnter={onStarEnter ? e => onStarEnter(e) : undefined}
            titleId="star" />
    })

    return outputStars
}

const ReviewStars = ({
    className,
    count,
    showEmptyStars,
    onStarClick,
    onStarEnter,
    ...other
}) => {
    const classes = classNames(styles.reviewStars, className)
    const starSet = renderStars(count, showEmptyStars, onStarClick, onStarEnter)

    return (
        <div className={classes} {...other}>
            {starSet}
        </div>
    )
}

ReviewStars.propTypes = {
    className: PropTypes.string,
    showEmptyStars: PropTypes.bool,
    onStarClick: PropTypes.func,
    onStarEnter: PropTypes.func,
    count: function (props, propName, componentName) {
        const propValue = props[propName]
        if (isNaN(propValue)) {
            return new Error(
                'Invalid prop `' + propName + '` applied to' +
                ' `' + componentName + '`. A number is required. Validation failed.'
            )
        }
        if (propValue < 0 || propValue > MAX_STARS) {
            return new Error(
                'Invalid prop `' + propName + '` applied to' +
                ' `' + componentName + '`. Count must be between 0 and 5. Validation failed.'
            )
        }
    }
}

ReviewStars.defaultProps = {
    className: '',
    showEmptyStars: false
}

export default ReviewStars
