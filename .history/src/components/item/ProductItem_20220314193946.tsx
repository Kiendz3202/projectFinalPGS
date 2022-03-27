import React from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';

interface Props {
  id?: number;
  sku?: string;
  price?: number;
  enabled?: number;
  weight?: number;
  arrivalDate?: number;
  name?: string;
  description?: string;
  created?: number;
  vendor?: string;
  vendorID?: number;
  amount?: number;
  participateSale?: number;
  category?: string;
  condition?: string;
}

function ProductItem(props: Props) {
  const {sku,price,name,amount,category,arrivalDate,vendor} = props;
  return (
    <div className=' grid grid-cols-12 gap-3 text-white  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
                <div className='mr-[10px] '>|</div>
                <PowerSettingsNew className='text-[#9d8159] cursor-pointer' />
            </div>
            <div className=' col-span-1 my-auto'>{sku}</div>
            <div className=' col-span-3 my-auto text-[#007EFF] cursor-pointer hover:border-b border-[#007EFF] truncate'>{name}</div>
            <div className=' col-span-2 my-auto'>{category}</div>
            <div className=' col-span-1 my-auto'>`$${price}`</div>
            <div className=' col-span-1 my-auto'>{amount}</div>
            <div className=' col-span-1 my-auto text-[#007EFF] cursor-pointer hover:border-b border-[#007EFF] truncate'>{vendor}</div>
            <div className=' col-span-2 my-auto pl-[5px] flex justify-between'>
              <span>{arrivalDate}</span>
              <span className=' border-l border-dotted'></span>
              <span className='bg-[#b18aff] mr-[10px] rounded-sm cursor-pointer'><Delete className=' hover:text-black' /></span>
            </div>
    </div>
  )
}

export default ProductItem
