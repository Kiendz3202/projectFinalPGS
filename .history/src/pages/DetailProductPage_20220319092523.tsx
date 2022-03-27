import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'

function DetailProductPage() {
  const [products,setProducts] = useState<any>()
  const productsData = useSelector((state: RootState) => state.products.products)
  const {productId} = useParams()
  const thisProduct = products.find((item:any) => item?.id === productId)

  useEffect(() =>{
    setProducts(productsData)
  },[productsData])
  return (
    <div className=' text-black'>{thisProduct?.name}</div>
  )
}

export default DetailProductPage