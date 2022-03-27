import React from 'react'
import ProductItem from '../item/ProductItem'

function ProductList() {
  return (
    <div>
        <div className='grid grid-cols-12 gap-3 text-white'>
            <div className=' col-span-1'>
                <input type='checkbox' />
            </div>
            <div className=' col-span-1'>SKU</div>
            <div className=' col-span-3'>Name</div>
            <div className=' col-span-3'>Category</div>
            <div className=' col-span-1'>Price</div>
            <div className=' col-span-1'>In stock</div>
            <div className=' col-span-2'>Vendor</div>
        </div>
        <ProductItem />
    </div>
  )
}

export default ProductList