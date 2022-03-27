import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productsActions } from '../../store/productsSlice';
import ProductItem from '../item/ProductItem'
import NavProductList from './NavProductList';
import FilterAlphabet from '../filter/filterProduct/FilterProduct';
import Delete from '@mui/icons-material/Delete';


export interface fetchResponse {
  id?: number | undefined;
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
  amount?: number | undefined;
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
  const dispatch = useDispatch()
  const productsSearch = useSelector((state: RootState) => state.products.productsSearch)
  const products = useSelector((state: RootState) => state.products.products)
  const isSearching = useSelector((state: RootState) => state.products.isSearching)
  const [itemsData,setItemsData] = useState<fetchResponse[]>([])
  const [pagination,setPagination] = useState<paginationType>({
    data:[],
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
      // setPagination((prev) => ({
      //   ...prev,
      //   data:itemslist.data
      // }))
      dispatch(productsActions.products({
        data:itemslist.data
      }))
    }catch(err){
      console.warn('fetch listitems wrong')
    }
  }

  useEffect(() =>{
    fetchItems()
  },[])

  
  useEffect(() =>{
    setPagination((prev) => ({
      ...prev,
      pageCount:!isSearching ? Math.ceil(products.length / prev.numberPerPage) : Math.ceil(productsSearch.length / prev.numberPerPage),
      currentData:!isSearching ? products.slice(pagination.offset, pagination.offset + pagination.numberPerPage) : productsSearch.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
  },[pagination.numberPerPage, pagination.offset,pagination.data,products,productsSearch])

  const handleClick = (e:any) =>{
    const selected = e.selected
    const offset = selected*pagination.numberPerPage
    setPagination({...pagination,offset})
  }
  const numberPerPageHandle = (value:number) =>{
    setPagination((prev) => ({
      ...prev,
      numberPerPage:value
    }))
  }
  // console.log(itemsData.length)
  // console.log(pagination.currentData)
  const checkboxHandle = (e:any) =>{

  }
  return (
    <div className='bg-[#323259]'>
        <div className='grid grid-cols-12 gap-3 text-white'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input onChange={checkboxHandle} type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <div className=' col-span-1 my-auto'>SKU</div>
            <div className=' col-span-3 my-auto'>Name</div>
            <div className=' col-span-2 my-auto'>Category</div>
            <div className=' col-span-1 my-auto'>Price</div>
            <div className=' col-span-1 my-auto'>In stock</div>
            <div className=' col-span-1 my-auto'>Vendor</div>
            <div className=' col-span-1 my-auto'>Arival Date</div>
            <div><span className='col-span-1 my-auto bg-[#b18aff] mr-[10px] rounded-sm cursor-pointer'><Delete className=' hover:text-black' /></span></div>
        </div>
        {pagination.currentData && pagination.currentData.map((item) => <ProductItem key={item.id} id={item.id}  sku={item.sku} name={item.name} category={item.category} price={item.price} amount={item.amount} vendor={item.vendor} arrivalDate={item.arrivalDate} />)}
        <NavProductList getNumberPerPage={numberPerPageHandle} pageCount ={pagination.pageCount} onPageChange={handleClick} />
    </div>
  )
}

export default ProductList

// function ProductList() {
//   const dispatch = useDispatch()
//    const products = useSelector((state: RootState) => state.products.products)
//   const [itemsData,setItemsData] = useState<fetchResponse[]>([])
//   const [pagination,setPagination] = useState<paginationType>({
//     data:[],
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
//       setPagination((prev) => ({
//         ...prev,
//         data:itemslist.data
//       }))
//       // dispatch(productsActions.products({
//       //   data:itemslist.data
//       // }))
//     }catch(err){
//       console.warn('fetch listitems wrong')
//     }
//   }

//   useEffect(() =>{
//     fetchItems()
//   },[])
  
//   useEffect(() =>{
//     setPagination((prev) => ({
//       ...prev,
//       pageCount:prev.data.length / prev.numberPerPage,
//       currentData:prev.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
//     }))
//   },[pagination.numberPerPage, pagination.offset,pagination.data])

//   const handleClick = (e:any) =>{
//     const selected = e.selected
//     const offset = selected*pagination.numberPerPage
//     setPagination({...pagination,offset})
//   }
//   const numberPerPageHandle = (value:number) =>{
//     setPagination((prev) => ({
//       ...prev,
//       numberPerPage:value
//     }))
//   }
//   console.log(itemsData.length)
//   console.log(pagination.currentData)