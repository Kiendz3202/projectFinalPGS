import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'
import { fetchResponse } from '../components/list/ProductList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailProductPage() {
  const {productId} = useParams()
  const productsData: fetchResponse[] = useSelector((state: RootState) => state.products.products)
  const thisProduct: fetchResponse | undefined = productsData?.find((item:any) => item?.id === productId)
  const [productTitle,setProductTitle] = useState<string | '' | undefined>(thisProduct?.name)
  const [productSku,setProductSku] = useState<string | '' | undefined>(thisProduct?.sku)

  const titleHandle = (e:any) =>{
    setProductTitle(e.target.value)
  }
  const skuHandle = (e:any) =>{
    setProductSku(e.target.value)
  }

console.log(thisProduct)
  return (
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px] text-white'>
      <div>
        <div className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px] cursor-pointer'>
          <ArrowBackIcon className='text-black pl-[4px]' />
        </div>
        <div className=' text-[28px]'>
          {thisProduct && thisProduct.name}
        </div>
      </div>
      <div className='relative text-[#A16EFF] border-b border-white'>
        <span className='ml-[10px] cursor-pointer'>Info</span>
        <div className=' absolute w-[50px] h-[3px] bg-[#A16EFF]'></div>
      </div>
      <div className='my-[32px]'>
        <div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='vendor'>Vendor <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input id='vendor' type='text' placeholder='Type Vendor name to select' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='title'>Product Title <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input id='title' type='text' onChange={titleHandle} value={productTitle} className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='brand'>Brand <span className='text-[#d13143]'>*</span></label>
            </div>  
            <select className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate'>
              <option>Other</option>
            </select>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='sku'>SKU <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input id='sku' type='text' onChange={skuHandle} value={productSku} className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailProductPage