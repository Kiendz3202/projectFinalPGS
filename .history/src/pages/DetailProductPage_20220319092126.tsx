import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store'

function DetailProductPage() {
  const productsData = useSelector((state: RootState) => state.products.products)
  const {productId} = useParams()
  const thisProduct = productsData.find((item) => item?.id === productId)
  return (
    <div>{thisProduct?.name}</div>
  )
}

export default DetailProductPage