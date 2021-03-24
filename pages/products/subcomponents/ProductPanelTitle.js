import classNames from 'classnames'

import SvgAwardWinning from '@components/SVGs/SvgAwardWinning'
import { skus } from 'config/globals'
import ReviewSummary from './ReviewSummary'

import styles from './ProductPanelTitle.module.scss'

const ProductPanelTitle = ({
    className,
    name,
    description,
    starCount,
    reviewCount,
    sku
}) => {
    const classes = classNames(styles.title, className)
    const qualifiedReviewSkus = [skus.classic, skus.loom, skus.zenhaven, skus.latexHybrid]
    const hasQualifiedReviews = qualifiedReviewSkus.includes(sku) && reviewCount > 9

    return (
        <header className={classes}>
            <div className={classNames('container container--sm', styles.innerContainer)}>
                <div className={classNames(styles.heading, 't-heading2 u-marginBottom--2xs')}>
                    <h1 className={styles.headingTitle}>{name}</h1>
                    {sku === skus.classic &&
                        <SvgAwardWinning
                            className="u-hidden--lg-down u-marginLeft--2xs"
                            height={28}
                            width={74} />
                    }
                </div>
                <p className={classNames('t-body', styles.description)}>{description}</p>
                {starCount > 0 &&
                    <ReviewSummary
                        linkId="customer-reviews"
                        className="reviewSummary--productPanel"
                        starCount={starCount}
                        showRating={true}
                        reviewCount={hasQualifiedReviews ? reviewCount : 0} />
                }
            </div>
        </header>
    )
}

export default ProductPanelTitle
