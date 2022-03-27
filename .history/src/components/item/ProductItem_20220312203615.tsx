import React from 'react'

function ProductItem() {
  return (
    <div className='grid grid-cols-12 gap-3 text-white'>
            <div className=' col-span-1'>
                <input type='checkbox' />
                <FontAwesomeIcon icon="fa-solid fa-power-off" />
            </div>
            <div className=' col-span-1'>SKU</div>
            <div className=' col-span-3'>Name</div>
            <div className=' col-span-3'>Category</div>
            <div className=' col-span-1'>Price</div>
            <div className=' col-span-1'>In stock</div>
            <div className=' col-span-2'>Vendor</div>
        </div>
  )
}

export default ProductItem