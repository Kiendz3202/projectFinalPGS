import React from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';

function ProductItem() {
  return (
    <div className='grid grid-cols-12 gap-3 text-white'>
            <div className=' col-span-1'>
                <input type='checkbox' />
                <PowerSettingsNew />
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