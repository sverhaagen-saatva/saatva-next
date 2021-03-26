import productData from '../../config/product-api'
import ProductConfig from './subcomponents/ProductConfig/ProductConfig'
import ProductSlider from './subcomponents/ProductSlider'
import DeliveryAndSetup from './subcomponents/DeliveryAndSetup'
import ProductPanelTitle from './subcomponents/ProductPanelTitle'
import LargePriceDisplay from '../../components/LargePriceDisplay'
import { AddToCartButton } from '../../components/Button'

import styles from './ProductPanel.module.scss'
import productPanelTitleStyles from './subcomponents/ProductPanelTitle.module.scss'
import { useState, useEffect, useCallback } from 'react'

const Product = ({
    sku,
    name,
    description,
    images,
    starCount,
    reviewCount,
    options,
    children
}) => {
    const [selectedChildProduct, setSelectedChildProduct] = useState(children[0])

    const possibleOptions = Object.keys(options)
    const initialConfigState = {}
    possibleOptions.forEach(possibleOption => initialConfigState[possibleOption] = options[possibleOption][0])
    const [configState, setConfigState] = useState(initialConfigState)

    const changeConfig = useCallback((optionType, optionValue) => {
        const newConfigState = { ...configState, [optionType]: optionValue }
        setConfigState(newConfigState)
    }, [configState])

    useEffect(() => {
        const newSelectedChildProduct = children.find(child => {
            const childConfigOptions = Object.keys(child.options)
            const matchingOptions = childConfigOptions.reduce((total, option) => {
                const match = child.options[option] === configState[option].id
                if (match) return total + 1
                else return total
            }, 0)

            if (matchingOptions === childConfigOptions.length) return true
            else return false
        })
        if (newSelectedChildProduct) setSelectedChildProduct(newSelectedChildProduct)
    }, [configState])

    return (
        <section id="productPanel" className={styles.productPanel}>
            <div className="container">
                <div className="row">
                    <div className={`col col--xs-12 col--md-12 col--lg-7`}>
                        <ProductSlider
                            images={images.slider} />
                        <DeliveryAndSetup />
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
                        <div className={styles.productPanelContent}>
                            <div className='col col--xs-12 col--md-10 col--offset-md-1 col--lg-12 col--offset-lg-reset u-paddingHorizontal--none'>
                                <ProductConfig sku={sku} options={options} changeConfig={changeConfig} />
                                <div className="productPanel__add">
                                    <LargePriceDisplay price={selectedChildProduct.price} />
                                    <AddToCartButton className={styles.addToCart} />
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
