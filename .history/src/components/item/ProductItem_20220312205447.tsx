import React from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';

function ProductItem() {
  return (
    <div className='grid grid-cols-12 gap-3 text-white'>
            <div className=' col-span-1'>
                <input type='checkbox' className='mr-[10px]' />
                <div className='mr-[10px] border-white border-r'></div>
                <PowerSettingsNew className='text-[#9d8159]' />
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