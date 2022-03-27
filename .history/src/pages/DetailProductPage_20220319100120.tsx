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
    <div className=' text-black mx-auto mt-[200px]'>{thisProduct && thisProduct.id}</div>
  )
}

export default DetailProductPage