import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'

function DetailProductPage() {
  const {productId} = useParams()
  const [products,setProducts] = useState<any>()
  const productsData = useSelector((state: RootState) => state.products.products)
  const thisProduct = products?.find((item:any) => item?.id === productId)

  useEffect(() =>{
    setProducts(productsData)
    console.log(products)
  },[productsData])
  return (
    <div className=' text-black'>{thisProduct?.name}</div>
  )
}

export default DetailProductPage