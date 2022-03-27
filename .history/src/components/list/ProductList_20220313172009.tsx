import React from 'react'
import ProductItem from '../item/ProductItem'

function ProductList() {
  return (
    <div className='bg-[#323259] overflow-x-scroll'>
        <div className='grid grid-cols-12 gap-3 text-white'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <div className=' col-span-1 my-auto'>SKU</div>
            <div className=' col-span-3 my-auto'>Name</div>
            <div className=' col-span-3 my-auto'>Category</div>
            <div className=' col-span-1 my-auto'>Price</div>
            <div className=' col-span-1 my-auto'>In stock</div>
            <div className=' col-span-2 my-auto'>Vendor</div>
        </div>
        <ProductItem />
    </div>
  )
}

export default ProductList