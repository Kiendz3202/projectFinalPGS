import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'
import { fetchResponse } from '../components/list/ProductList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailProductPage() {
  const {productId} = useParams()
  // const [products,setProducts] = useState<any>()
  const productsData: fetchResponse[] = useSelector((state: RootState) => state.products.products)
  const thisProduct: fetchResponse | undefined = productsData?.find((item:any) => item?.id === productId)

  return (
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px] text-white'>
      <div>
        <div className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px]'>
          <ArrowBackIcon className='text-black pl-[4px]' />
        </div>
        <div className=' text-[28px]'>
          {thisProduct && thisProduct.name}
        </div>
      </div>
      <div>
        <span>Info</span>
        <div></div>
      </div>
    </div>
  )
}

export default DetailProductPage