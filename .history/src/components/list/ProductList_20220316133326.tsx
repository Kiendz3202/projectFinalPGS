import React, { useEffect, useState } from 'react'
import ProductItem from '../item/ProductItem'
import NavProductList from './NavProductList';


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

interface paginationType {
  data:fetchResponse[];
  offset: number;
  numberPerPage:number,
  pageCount:number,
  currentData:fetchResponse[]
}


function ProductList() {
  const [itemsData,setItemsData] = useState<fetchResponse[]>([])
  const [pagination,setPagination] = useState<paginationType>({
    data:itemsData,
    offset:0,
    numberPerPage:25,
    pageCount:0,
    currentData:[]
  })
  const fetchItems = async () =>{
    try{
      const response = await fetch('https://api.gearfocus.div4.pgtest.co/api/products/list')
      if(!response){
        throw new Error('somethign wrong');
        return;
      }
      const itemslist = await response.json()
      setItemsData(itemslist.data)
    }catch(err){
      console.warn('fetch listitems wrong')
    }
  }

  useEffect(() =>{
    fetchItems()
    // console.log(pagination.data)
    setPagination((prev) => ({
      ...prev,
      pageCount:itemsData.length / prev.numberPerPage,
      currentData:itemsData.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))

  },[pagination.numberPerPage, pagination.offset])

  const handleClick = (e:any) =>{
    const selected = e.selected
    const offset = selected*pagination.numberPerPage
    setPagination({...pagination,offset})
  }
  console.log(itemsData.length)
  console.log(pagination.currentData)
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
        {pagination.currentData && pagination.currentData.map((item) => <ProductItem key={item.id}  sku={item.sku} name={item.name} category={item.category} price={item.price} amount={item.amount} vendor={item.vendor} arrivalDate={item.arrivalDate} />)}
        <NavProductList onPageChange={handleClick} />
    </div>
  )
}

export default ProductList

// function ProductList() {
//   const [items,setItems] = useState<fetchResponse[]>([])
//   const [pagination,setPagination] = useState<paginationType>({
//     data:items,
//     offset:0,
//     numberPerPage:25,
//     pageCount:0,
//     currentData:[]
//   })
//   const fetchItems = async () =>{
//     try{
//       const response = await fetch('https://api.gearfocus.div4.pgtest.co/api/products/list')
//       if(!response){
//         throw new Error('somethign wrong');
//         return;
//       }
//       const itemslist = await response.json()
//       setItems(itemslist.data)
//       console.log(items)
//     }catch(err){
//       console.warn('fetch listitems wrong')
//     }
//   }

//   useEffect(() =>{
//     fetchItems()

//   },[])