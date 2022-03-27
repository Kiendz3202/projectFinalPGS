import React from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';


function ProductItem() {
  return (
    <div className=' grid grid-cols-12 gap-3 text-white  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
                <div className='mr-[10px] '>|</div>
                <PowerSettingsNew className='text-[#9d8159]' />
            </div>
            <div className=' col-span-1 my-auto'>ss-1521</div>
            <div className=' col-span-3 my-auto'>3x2m Effect Image Solid color Backgrounds Black screen </div>
            <div className=' col-span-2 my-auto'>Background Supports</div>
            <div className=' col-span-1 my-auto'>$239.0</div>
            <div className=' col-span-1 my-auto'>472</div>
            <div className=' col-span-1 my-auto'>Administrator</div>
            <div className=' col-span-2 my-auto pl-[5px] flex justify-between'>
              <span>Jan 25, 2020</span>
              <span className=' border-l border-dotted'></span>
              <span className='bg-[#b18aff] mr-[10px] rounded-sm cursor-pointer'><Delete className='' /></span>
            </div>
    </div>
  )
}

export default ProductItem
