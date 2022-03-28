import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../store'
import { fetchResponse } from '../components/list/ProductList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Multiselect from 'multiselect-react-dropdown'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { Label } from '@mui/icons-material'
import HelpIcon from '@mui/icons-material/Help';
import {productsActions} from '../store/productsSlice'


function NewProductPage() {
  const navigate = useNavigate()
  // const {productId} = useParams()
  const dispatch = useDispatch()
  const productsData: fetchResponse[] = useSelector((state: RootState) => state.products.products)
  // const thisProduct: fetchResponse | undefined = productsData?.find((item:any) => item?.id === productId)
  const [product,setProduct] = useState<fetchResponse | undefined>({})
  // const [productTitle,setProductTitle] = useState<string | '' | undefined>(thisProduct?.name)
  // const [productSku,setProductSku] = useState<string | '' | undefined>(thisProduct?.sku)
  const [categories,setCategories] = useState<string[]>([])
  // const [btnUpdate,setBtnUpdate] = useState<boolean>(false)
  const [btnAvailable,setBtnAvailable] = useState<boolean>(false)

  const backToUserListHandle = () =>{
    navigate(-1)
  }
  const vendorHandle = (e:any) =>{
    setProduct((prev) => ({
      ...prev,
      vendor:e.target.value
    }))
  }
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
  const categorySelectedHandle = (selectedList: any,selectedItem: any) => {
    const obj = selectedList[0]
    setProduct((prev) =>({
      ...prev,
      category:obj.key
    }))
    // console.log(obj.key)
    // console.log(obj.key)
  }
  const descriptionHandle = (e:any) =>{
    setProduct((prev) => ({
      ...prev,
      description:e.target.value
    }))
  }
  const priceHandle = (e:any) =>{
    setProduct((prev) => ({
      ...prev,
      price:e.target.value
    }))
  }
  const dateHandle = (e:any) =>{
    setProduct((prev) =>({
      ...prev,
      arrivalDate:Math.floor(new Date(e.target.value).getTime() / 1000)
    }))
    console.log(e.target.value)
    console.log(product)
  }
  const quantityStockHandle = (e:any) =>{
    setProduct((prev) => ({
      ...prev,
      amount:e.target.value
    }))
  }
  const addNewProduct = () =>{
    let dataAdded: fetchResponse[] = []
    if(product?.amount && product?.arrivalDate && product?.category && product?.description && product?.name && product?.price && product?.sku && product?.vendor){
      dataAdded = Object.assign([],productsData)
      dataAdded.push({
        ...product,
        id:Math.random()
      })
      console.log(dataAdded)
      console.log(Math.floor(Math.random() * 1000000))
      // dispatch(productsActions.products({
      //   data:dataAdded.push({
      //     ...product,
      //     id:Math.random()
      //   })
      // }))
      navigate('/home/productlist') 
    }else{
      alert('wrong')
    }
    // dispatch(productsActions.products({
    //   ...product,
    //   id:Math.random()
    // }))
  }
  // useEffect(() =>{
  //   if(product?.amount && product?.arrivalDate && product?.category && product?.description && product?.name && product?.price && product?.sku && product?.vendor){
  //     setBtnAvailable(true)
  //   }else{
  //     setBtnAvailable(false)
  //   }
  // },[product])
  useEffect(() =>{
    let categories:any[] = []
    productsData.map((product,index) => {
      categories.push({cat:index,key:product.category})
    })
    setCategories(categories)
  },[])


  return (
    <div className='bg-[#1b1b38] w-full h-full ml-[256px] mt-[76px] p-[36px] text-white'>
      <div>
        <div onClick={backToUserListHandle} className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px] cursor-pointer'>
          <ArrowBackIcon className='text-black pl-[4px]' />
        </div>
        <div className=' text-[28px]'>
          Add product
        </div>
      </div>
      <div className='my-[32px]'>
        <div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='vendor'>Vendor <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input onChange={vendorHandle} id='vendor' type='text' placeholder='Type Vendor name to select' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='title'>Product Title <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input id='title' type='text' onChange={titleHandle} className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='brand'>Brand</label>
            </div>  
            <select className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate'>
              <option>Other</option>
            </select>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='sku'>SKU <span className='text-[#d13143]'>*</span></label>
            </div>  
            <input id='sku' type='text' onChange={skuHandle}  className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='category'>Category <span className='text-[#d13143]'>*</span></label>
            </div>  
            <Multiselect
              // singleSelect
              className='text-black bg-[#252547]'
              displayValue="key"
              onSelect={categorySelectedHandle}
              options={categories}
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
                <span>Available for sale</span>
            </div>  
            <div className="flex items-center">
                <FormGroup>
                  <FormControlLabel control={<Switch />} label='' />
                </FormGroup>
                <HelpIcon className='' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#323259] w-full h-[20px] ' style={{boxShadow:'inset 0 5px 5px -5px rgb(0 0 0 / 75%)'}}></div>
      <div>
        <div className='my-[16px] text-[28px]'>Prices & Inventory</div>
        <div>
            <div className='flex mb-[26px]'>
              <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <label htmlFor='memberships'>Memberships</label>
              </div>  
              <select className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]'>
                <option value='General'>General</option>
              </select>
            </div>
            <div className='flex mb-[26px]'>
              <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <label htmlFor='price'>Price <span className='text-[#d13143]'>*</span></label>
              </div>  
              <input id='title' type='text' onChange={priceHandle}  className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
            </div>
            <div className='flex mb-[26px]'>
              <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <label htmlFor='date'>Arrival date <span className='text-[#d13143]'>*</span></label>
              </div>  
              <input id='date' type='date' onChange={dateHandle}  className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
            </div>
            <div className='flex mb-[26px]'>
              <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <label htmlFor='quantity'>Quantity in stock <span className='text-[#d13143]'>*</span></label>
              </div>  
              <input id='quantity' type='text' onChange={quantityStockHandle}  className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
            </div>
        </div>      
      </div>
      <div className='bg-[#323259] w-full h-[20px] ' style={{boxShadow:'inset 0 5px 5px -5px rgb(0 0 0 / 75%)'}}></div>
      <div>
        <div className='my-[16px] text-[28px]'>Shipping</div>
        <div>
          <div className='flex mb-[26px]'>
              <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <label htmlFor='contential'>Contential US</label>
              </div>  
              <input id='contential' type='text' placeholder='$0.00' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
          </div>
        </div>
      </div>
      <div className='bg-[#323259] w-full h-[20px] ' style={{boxShadow:'inset 0 5px 5px -5px rgb(0 0 0 / 75%)'}}></div>
      <div>
        <div className='my-[16px] text-[28px]'>Marketing</div>
        <div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='metatag'>Open Graph meta tags</label>
            </div>  
            <select defaultValue='autogenerated' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]'>
              <option value='autogenerated'>Autogenerated</option>
              <option value='custom'>custom</option>
            </select>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='metadescription'>Meta description</label>
            </div>  
            <select defaultValue='autogenerated' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]'>
              <option value='autogenerated'>Autogenerated</option>
              <option value='custom'>custom</option>
            </select>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='metakeyword'>Meata keyword</label>
            </div>  
              <input id='metakeyword' type='text' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
              <label htmlFor='pagetitle'>Product page title</label>
            </div>  
              <input id='pagetitle' type='text' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <span>Add to Facebook<br />product feed</span>
            </div>  
            <div className="flex items-center">
                <FormGroup>
                  <FormControlLabel control={<Switch />} label='' />
                </FormGroup>
                <HelpIcon className='' />
            </div>
          </div>
          <div className='flex mb-[26px]'>
            <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                <span>Add to Google<br />product feed</span>
            </div>  
            <div className="flex items-center">
                <FormGroup>
                  <FormControlLabel control={<Switch />} label='' />
                </FormGroup>
                <HelpIcon className='' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center w-full h-[75px] bg-[#323259] px-[36px] py-[15px]' style={{boxShadow:'0 0 13px 0 #b18aff'}}>
        <button  onClick={addNewProduct} className='flex items-center bg-[#f0ad4e] hover:opacity-80 w-[148px] h-[33px] px-[15px] py-[8px] rounded-md cursor-pointer'>Add product</button>
      </div>
    </div>
  )
}

export default NewProductPage

//select new zone chua fetch dc api de render

