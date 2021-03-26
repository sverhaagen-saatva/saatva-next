import React from 'react'
import { Button } from '.'

const AddToCartButton = ({ className }) => {
    return (
        <Button kind="primary" className={className}>
            Add 1 Item to Cart
        </Button>
    )
}

export default AddToCartButton
