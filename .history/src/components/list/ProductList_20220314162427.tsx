import React, { useEffect, useState } from 'react'
import ProductItem from '../item/ProductItem'

interface fetchResponse {
  id?: number;
  sku?: string;
  price?: number;
  enabled?: number;
  weight?: number;
  arrivalDate?: number;
  name?: string;
  description?: string;
  created?: number;
  vendor?: string;
  vendorID?: number;
  amount?: number;
  participateSale?: number;
  category?: string;
  condition?: string;
}

function ProductList() {
  const [response,setResponse] = useState<fetchResponse[]>([])
  const fetchItems = async () =>{
    try{
      const response = await fetch('https://api.gearfocus.div4.pgtest.co/api/products/list')
      if(!response){
        throw new Error('somethign wrong');
        return;
      }
      setResponse(response.data)
    }catch(err){
      console.warn('fetch listitems wrong')
    }
  }

  useEffect(() =>{
    fetchItems()
  },[response])
  return (
    <div className='bg-[#323259]'>
        <div className='grid grid-cols-12 gap-3 text-white'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <div className=' col-span-1 my-auto'>SKU</div>
            <div className=' col-span-3 my-auto'>Name</div>
            <div className=' col-span-2 my-auto'>Category</div>
            <div className=' col-span-1 my-auto'>Price</div>
            <div className=' col-span-1 my-auto'>In stock</div>
            <div className=' col-span-1 my-auto'>Vendor</div>
            <div className=' col-span-2 my-auto'>Arival Date</div>
        </div>
        {response.data.map((item:any) => <ProductItem />)}
        {/* <ProductItem  /> */}
    </div>
  )
}

export default ProductList