import React from 'react'
import SearchProductForm from '../components/form/searchform/SearchProductForm'

function ProductListPage() {
  return (
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white mb-[24px]'>
        <div className='text-[32px] mb-[16px]'>Products</div>
        <div className='mb-[40px]'>
          <SearchProductForm />
        </div>
        <div>
          <button className='text-[15px] block bg-[#b18aff] w-[110px] h-[34px] px-[12px] py-[6px] rounded-md'>Add Products</button>
        </div>
      </div>
      <div>
        productlist
      </div>
    </div>
  )
}

export default ProductListPage