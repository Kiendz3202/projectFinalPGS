import React from 'react'
import ProductItem from '../item/ProductItem'

function ProductList() {
  return (
    <div className='bg-[#323259]'>
        <div className='grid grid-cols-12 gap-3 text-white'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <div className=' col-span-1 my-auto'>ss-1521</div>
            <div className=' col-span-3 my-auto'>3x2m Effect Image Solid color Backgrounds Black screen </div>
            <div className=' col-span-2 my-auto'>Background Supports</div>
            <div className=' col-span-1 my-auto'>$239.0</div>
            <div className=' col-span-1 my-auto'>472</div>
            <div className=' col-span-1 my-auto'>Administrator</div>
            <div className=' col-span-2 my-auto'>Jan 25, 2020</div>
        </div>
        <ProductItem />
    </div>
  )
}

export default ProductList