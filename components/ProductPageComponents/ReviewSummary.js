import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-scroll'

import globals from 'config/globals'
import useIsMobile from 'hooks/useIsMobile'
import { ReviewStars } from '@components/ReviewStars'

import styles from './ReviewSummary.module.scss'

const ReviewSummary = ({
    className,
    hasFPP,
    linkId,
    starCount,
    showRating,
    reviewCount,
    ...other
}) => {
    const isMobile = useIsMobile(true)

    const classes = classNames(styles.reviewSummary, {
        'u-cursorPointer': linkId
    }, className)

    let ratingText

    if (starCount && showRating) {
        ratingText = `(${starCount})`

        if (reviewCount) {
            ratingText = `${ratingText} ${reviewCount.toLocaleString('en')} reviews`
        }
    }

    const offset = isMobile
        ? globals.offsets.mobileFloatingProductPanel
        : globals.offsets.floatingProductPanel

    const getReviewStars = (linkId) => {
        if (linkId) {
            return (
                <Link
                    tabIndex="0"
                    to={linkId}
                    smooth={true}
                    duration={900}
                    offset={hasFPP ? offset : 0}
                    className={classes}
                    {...other}>
                    <ReviewStars
                        className={styles.reviewSummaryStars}
                        count={starCount}
                        showEmptyStars={true} />
                    { ratingText &&
                        <span className={styles.reviewSummaryText}>
                            {ratingText}
                        </span>
                    }
                </Link>
            )
        } else {
            return (
                <div className={classes} {...other}>
                    <ReviewStars
                        count={starCount}
                        showEmptyStars={true} />
                    { ratingText &&
                        <span className={styles.reviewSummaryText}>
                            {ratingText}
                        </span>
                    }
                </div>
            )
        }
    }

    return getReviewStars(linkId)
}

ReviewSummary.propTypes = {
    className: PropTypes.string,
    hasFPP: PropTypes.bool,
    linkId: PropTypes.string,
    starCount: PropTypes.number,
    showRating: PropTypes.bool,
    reviewCount: PropTypes.number,
    target: PropTypes.string
}

ReviewSummary.defaultProps = {
    target: '_self',
    hasFPP: false
}

export default ReviewSummary
