import Dropdown from '@components/Dropdown'
import React from 'react'
import styles from './ProductConfig.module.scss'

const ProductConfig = ({ sku, options }) => {
    return (
        <div>
            <Dropdown label="Select Size" options={options.size} />
        </div>
    )
}

export default ProductConfig
