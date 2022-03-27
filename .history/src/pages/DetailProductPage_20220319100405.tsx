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
    <div className='bg-[#1b1b38] w-full h-full ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white '>
        <div className='text-[32px] mb-[16px]'>Products</div>
        <div className='mb-[40px]'>
          {/* <SearchProductForm /> */}123
        </div>
        <div className='mb-[24px]'>
          <button className='text-[15px] block bg-[#b18aff] min-w-[110px] h-[34px] px-[12px] py-[6px] rounded-sm'>Add Products</button>
        </div>
      </div>
      <div>
        {/* <ProductList /> */}123
      </div>
      <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
        {/* <Save /> */}123
      </div>
    </div>
  )
}

export default DetailProductPage