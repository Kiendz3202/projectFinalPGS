import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'
import { fetchResponse } from '../components/list/ProductList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Multiselect from 'multiselect-react-dropdown'
import { Switch } from '@mui/material'

function DetailProductPage() {
  const {productId} = useParams()
  const productsData: fetchResponse[] = useSelector((state: RootState) => state.products.products)
  const thisProduct: fetchResponse | undefined = productsData?.find((item:any) => item?.id === productId)
  const [product,setProduct] = useState<fetchResponse | undefined>(thisProduct)
  // const [productTitle,setProductTitle] = useState<string | '' | undefined>(thisProduct?.name)
  // const [productSku,setProductSku] = useState<string | '' | undefined>(thisProduct?.sku)
  const [categories,setCategories] = useState<string[]>([])

  const titleHandle = (e:any) =>{
    // setProductTitle(e.target.value)
    setProduct((prev) => ({
      ...prev,
      name:e.target.value
    }))
  }
  const skuHandle = (e:any) =>{
    // setProductSku(e.target.value)
    setProduct((prev) => ({
      ...prev,
      sku:e.target.value
    }))
  }
  const categorySelectedHandle = (selectedList: any, selectedItem: any) => {
    console.log(selectedList)
    console.log(selectedItem)
  }
  const descriptionHandle = (e:any) =>{
    console.log(e.target.value)
  }

  useEffect(() =>{
    let categories:any[] = []
    productsData.map((product,index) => {
      categories.push({cat:index,key:product.category})
    })
    setCategories(categories)
    console.log(categories)
  },[])

console.log(thisProduct)
  return (
    <div className='bg-[#1b1b38] w-full h-full ml-[256px] mt-[76px] p-[36px] text-white'>
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
            <input id='title' type='text' onChange={titleHandle} value={product?.name} className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
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
            <input id='sku' type='text' onChange={skuHandle} value={product?.sku} className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='category'>Category <span className='text-[#d13143]'>*</span></label>
            </div>  
            <Multiselect
              singleSelect
              className='text-black bg-[#252547]'
              displayValue="key"
              onSelect={categorySelectedHandle}
              options={categories}
              selectedValues={[{
                cat:`${thisProduct?.id}`,
                key:`${thisProduct?.category}`
              }]}
            />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='description'>Description <span className='text-[#d13143]'>*</span></label>
            </div>  
            <textarea onChange={descriptionHandle} id='description' className='bg-[#1b1b38] resize-none w-[550px] h-[196px] border border-white' placeholder='Enter text here...'></textarea>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <span>Available for sale<span className='text-[#d13143]'>*</span></span>
            </div>  
            <div className="flex justify-center">
                {/* <div className="form-check form-switch">
                  <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div> */}
                <Switch {...label} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPage