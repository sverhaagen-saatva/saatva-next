import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ReviewStars } from '.'

const ReviewStarsSelection = ({
    className,
    count,
    onStarSelection
}) => {
    const [starCount, setStarCount] = useState(count)
    const [starClickCount, setStarClickCount] = useState(count)

    const classes = classNames('reviewStars--selection', className)

    const getStarCount = event => {
        const starElement = event.currentTarget
        const starCount = Array.from(starElement.parentNode.children).indexOf(starElement) + 1
        return starCount
    }

    return (
        <ReviewStars
            className={classes}
            count={starCount}
            showEmptyStars={true}
            onStarClick={event => {
                const newStarCount = getStarCount(event)
                setStarCount(newStarCount)
                setStarClickCount(newStarCount)
                onStarSelection(event, newStarCount)
            }}
            onStarEnter={event => {
                const newStarCount = getStarCount(event)
                setStarCount(newStarCount)
            }}
            onMouseLeave={() => {
                setStarCount(starClickCount)
            }} />
    )
}

ReviewStarsSelection.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number,
    onStarSelection: PropTypes.func
}

ReviewStarsSelection.defaultProps = {
    count: 0
}

export default ReviewStarsSelection
