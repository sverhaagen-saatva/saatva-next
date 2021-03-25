import productData from '../../config/product-api'
import ProductConfig from './subcomponents/ProductConfig/ProductConfig'
import ProductSlider from './subcomponents/ProductSlider'
import DeliveryAndSetup from './subcomponents/DeliveryAndSetup'
import ProductPanelTitle from './subcomponents/ProductPanelTitle'
import LargePriceDisplay from '../../components/LargePriceDisplay'
import { AddToCartButton } from '../../components/Button'

import styles from './ProductPanel.module.scss'
import productPanelTitleStyles from './subcomponents/ProductPanelTitle.module.scss'

const Product = ({
    sku,
    name,
    description,
    images,
    starCount,
    reviewCount,
    outOfStock,
    options,
    children
}) => {
    return (
        <section id="productPanel" className={styles.productPanel}>
            <div className="container">
                <div className="row">
                    <div className={`col col--xs-12 col--md-12 col--lg-7`}>
                        <ProductSlider
                            images={images.slider} />
                        {/* <DeliveryAndSetup
                            className="u-hidden--lg-down"
                            sku={productImagesSku}
                            isCompact={true} /> */}
                    </div>
                    <div className="col col--xs-12 col--md-12 col--lg-5">
                        <div className={productPanelTitleStyles.container}>
                            <ProductPanelTitle
                                className="u-hidden--lg-down u-paddingTop--xs"
                                name={name}
                                description={description}
                                starCount={starCount}
                                reviewCount={reviewCount}
                                sku={sku} />
                        </div>
                        <div className="productPanel__content">
                            <div className='col col--xs-12 col--md-10 col--offset-md-1 col--lg-12 col--offset-lg-reset'>
                                <ProductConfig sku={sku} options={options} />
                                <div className="productPanel__add">
                                    <LargePriceDisplay
                                        className="productPanel__priceDisplay largePriceDisplay--contrast2"
                                        priceClassName="productPanel__priceDisplay--price"
                                    />
                                    {outOfStock ? (
                                        <SoldOutMessage productName={name} />
                                    ) : (
                                        <AddToCartButton className={'productPanel__addToCart'} />
                                    )}
                                </div>
                                {/* <DeliveryAndSetup
                                    className={deliveryAndSetupClassNames}
                                    sku={productImagesSku}
                                    isCompact={true} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Product

export async function getStaticPaths() {
    const paths = Object.keys(productData).map((sku) => (
        { params: { sku } }
    ))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    return { props: { sku: params.sku, ...productData[params.sku] } }
}
