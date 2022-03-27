import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'

function DetailProductPage() {
  const {productId} = useParams()
  // const [products,setProducts] = useState<any>()
  const productsData = useSelector((state: RootState) => state.products.products)
  const thisProduct = productsData?.find((item:any) => item?.id === productId)

  // useEffect(() =>{
  //   setProducts(productsData)
  //   console.log(products)
  //   console.log(productsData)
  // },[productsData])
  // console.log(products)
    console.log(thisProduct)
  return (
    <div className=' text-black mx-auto'></div>
  )
}

export default DetailProductPage