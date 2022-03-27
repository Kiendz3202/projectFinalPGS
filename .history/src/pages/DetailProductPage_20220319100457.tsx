import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'
import { fetchResponse } from '../components/list/ProductList'

function DetailProductPage() {
  const {productId} = useParams()
  // const [products,setProducts] = useState<any>()
  const productsData: fetchResponse[] = useSelector((state: RootState) => state.products.products)
  const thisProduct: fetchResponse | undefined = productsData?.find((item:any) => item?.id === productId)

  return (
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px]'>
      123
    </div>
  )
}

export default DetailProductPage