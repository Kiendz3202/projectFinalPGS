import React from 'react'
import ProductItem from '../item/ProductItem'

function ProductList() {
  return (
    <div>
        <div className='grid grid-col-12 gap-3'>
            <div>
                <input type='checkbox' />
            </div>
            <div>SKU</div>
            <div>Name</div>
            <div>Category</div>
            <div>Price</div>
            <div>In stock</div>
            <div>Vendor</div>
        </div>
        <ProductItem />
    </div>
  )
}

export default ProductList