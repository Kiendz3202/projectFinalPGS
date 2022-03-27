import React from 'react'
import { useNavigate } from 'react-router-dom'
import Save from '../components/bottom/Save'
import SearchProductForm from '../components/form/searchform/SearchProductForm'
import ProductList from '../components/list/ProductList'

function ProductListPage() {
  const navigate = useNavigate()
  return (
    <div className='bg-[#1b1b38] w-full h-auto ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white '>
        <div className='text-[32px] mb-[16px]'>Products</div>
        <div className='mb-[40px]'>
          <SearchProductForm />
        </div>
        <div onClick={() => navigate('/home/new-product')} className='mb-[24px]'>
          <button className='text-[15px] block bg-[#b18aff] min-w-[110px] h-[34px] px-[12px] py-[6px] rounded-sm'>Add Products</button>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
      <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
        <Save />
      </div>
    </div>
  )
}
// px-[36px]
export default ProductListPage