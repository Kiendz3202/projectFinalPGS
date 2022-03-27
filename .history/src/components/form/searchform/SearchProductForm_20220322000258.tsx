import { Filter } from '@mui/icons-material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { productsActions } from '../../../store/productsSlice';
import { fetchResponse } from '../../list/ProductList';


interface CategoriesType {
    id:number;
    parentId:number;
    name:string;
    path:string;
    pos:number
}



function SearchProductForm() {
    const dispatch = useDispatch()
    const productsStore: fetchResponse[] = useSelector((state: RootState) => state.products.products)
    const productsSearching: fetchResponse[] = useSelector((state: RootState) => state.products.productsSearch)
    const categoriesData = useSelector((state: RootState) => state.products.categories)
    const contentSpace = useRef<any>(null)
    const keywordFilterRef = useRef<any>('')
    const [active,setActive] = useState(false)
    const [height,setHeight] = useState('0px')
    const [rotate,setRotate] = useState('transform duration-700 ease')
    const [categories,setCategories] = useState<CategoriesType[]>([])
    const [categoryValueSearch,setCategoryValueSearch] = useState('anycategory')
    const [stockValueSearch,setStockValueSearch] = useState('anystock')

    const expandAndCollapse = () =>{
        setActive(active === false ? true : false)
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
    }

    const fetchItems = async () => {
        try{
            const response = await fetch('https://api.gearfocus.div4.pgtest.co/api/categories/list')
            if(!response){
                throw new Error('something wrong')
                return
            }
            const responseData = await response.json()
            dispatch(productsActions.categories({
                data:responseData.data
            }))
            // setCategories(categoriesData)
        }catch(err){
            console.warn('Something wrong')
        }
    }

    useEffect(() =>{
        fetchItems()
    },[])

    useEffect(() =>{
        setCategories(categoriesData)
        console.log(categories)
    },[categoriesData])
    // console.log(keywordFilterRef.current.value)

    const searchForm = (e:any) =>{
        if(keywordFilterRef.current.value === '' && categoryValueSearch === 'anycategory' && stockValueSearch === 'anystock'){
            dispatch(productsActions.SearchProductForm({
                isSearching:false,
                data:productsStore
            }))
        }
        if(keywordFilterRef.current.value !== ''){
            dispatch(productsActions.SearchProductForm({
                isSearching:true,
                data:productsSearching?.filter((product) => product?.sku?.includes(keywordFilterRef.current.value) || product?.name?.includes(keywordFilterRef.current.value) || product?.category?.includes(keywordFilterRef.current.value) || product?.description?.includes(keywordFilterRef.current.value))
            }))
        }
        if(categoryValueSearch !== 'anycategory'){
            dispatch(productsActions.SearchProductForm({
                isSearching:false,
                data:productsSearching?.filter((product) =>  product?.category?.includes(categoryValueSearch))
            }))
        }
        // if(stockValueSearch !== 'anystock'){
        //     dispatch(productsActions.SearchProductForm({
        //         isSearching:true,
        //         data:productsSearching
        //     }))
        //     if(stockValueSearch === 'instock'){
        //         dispatch(productsActions.SearchProductForm({
        //             isSearching:true,
        //             data:productsSearching?.filter((product) =>  product?.amount! > 0)
        //         }))
        //     }
        // }
        
        // if(keywordFilterRef.current.value === '' && categoryValueSearch === 'anycategory'){
        //     dispatch(productsActions.SearchProductForm({
        //         isSearching:false,
        //         data:productsStore
        //     }))
        // }
        // if(keywordFilterRef.current.value !== '' && categoryValueSearch === 'anycategory'){
        //     dispatch(productsActions.SearchProductForm({
        //         isSearching:true,
        //         data:productsStore?.filter((product) => product?.sku?.includes(keywordFilterRef.current.value) || product?.name?.includes(keywordFilterRef.current.value) || product?.category?.includes(keywordFilterRef.current.value) || product?.description?.includes(keywordFilterRef.current.value))
        //     }))
        // }
        // if(keywordFilterRef.current.value === '' && categoryValueSearch !== 'anycategory'){
        //     dispatch(productsActions.SearchProductForm({
        //         isSearching:true,
        //         data:productsStore?.filter((product) =>  product?.category?.includes(categoryValueSearch))
        //     }))
        // }
        // if(keywordFilterRef.current.value !== '' && categoryValueSearch !== 'anycategory'){
        //     dispatch(productsActions.SearchProductForm({
        //         isSearching:true,
        //         data:productsStore?.filter((product) => (product?.category?.includes(categoryValueSearch)) && (product?.sku?.includes(keywordFilterRef.current.value) || product?.name?.includes(keywordFilterRef.current.value) || product?.description?.includes(keywordFilterRef.current.value)))
        //     }))
        // }
    }

    const categoryFilterHandle = (e:any) =>{
        setCategoryValueSearch(e.target.value)
    }
    const stockFilterHandle = (e:any) =>{
        setStockValueSearch(e.target.value)
    }



  return (
      <Fragment>
    <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px] text-white '>
            <div className=' col-span-5'>
                <input ref={keywordFilterRef} className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]' placeholder='Search keywords' type='text' />
            </div>
            <div className='col-span-3'>
                <select onChange={categoryFilterHandle} defaultValue='anycategory' className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                    <option value='anycategory'>Any category</option>
                    {categories.map((category,index) => (<option value={category.name} key={category.id}>{category.name}</option>))}
                    {/* <option value="volvo">Volvo</option> */}
                </select>
            </div>
            <div className='col-span-3'>
                <select onChange={stockFilterHandle} defaultValue='anystock' className=' w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                    <option value="anystock">Any stock status</option>
                    <option value="instock">In stock</option>
                    <option value="lowstock">Low Stock</option>
                    <option value="sold">SOLD</option>
                </select>
            </div>
            <div className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff] cursor-pointer'>
                <button onClick={searchForm} className='text-black hover:opacity-80' >Search</button>
            </div>
        </div>
        <div className={`flex relative transition-maxHeight duration-700 ease-in-out overflow-hidden`} ref={contentSpace} style={{maxHeight:`${height}`}}>
            <div className=' absolute top-[-20px] h-[1px] bg-[#1b1b38] w-[1191px] left-[-20px] '></div>
            <div className='flex  mr-[40px]'>
                <div className='mr-[15px]'>Search in:</div>
                <div className='ml-[10px]'>
                    <ul>
                        <li>
                            <input type='checkbox' id='name' />
                            <label htmlFor='name'>Name</label>
                        </li>
                        <li>
                            <input type='checkbox' id='sku' />
                            <label htmlFor='sku'>SKU</label>
                        </li>
                        <li className='mb-[8px]'>
                            <input type='checkbox' id='fulldescription' />
                            <label htmlFor='fulldescription'>Full Description</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex mt-[20px] mr-[40px]'>
                <div className='mr-[15px]'>Availability</div>
                <div>
                    <select className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                        <option value="">Any Availability Status</option>
                        <option value="">Only Enabled</option>
                        <option value="">Only Disabled</option>
                    </select>
                </div>
            </div>
            <div className='flex mt-[20px]'>
                <div className='mr-[15px]'>Vendor</div>
                <div>
                    <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm' type='text' />
                </div>
            </div>
        </div>
    </div>
    <div className='flex justify-center'>
        <div onClick={expandAndCollapse} className=' w-[50px] bg-[#323259] text-center cursor-pointer'>
            <KeyboardArrowDown className={`h-fullr transition-transform ${rotate}`}/>
        </div>
    </div>
    </Fragment>
  )
}

export default SearchProductForm

//set các giá trị filter thành array r viết điều kiện render sản phẩm khi ấn button search
