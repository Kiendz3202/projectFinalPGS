import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { productsActions } from '../../../store/productsSlice';

interface CategoriesType {
    id:number;
    parentId:number;
    name:string;
    path:string;
    pos:number
}


function SearchProductForm() {
    const dispatch = useDispatch()
    const categoriesData = useSelector((state: RootState) => state.products.categories)
    const content = useRef(null)
    const [active,setActive] = useState('')
    const [height,setHeight] = useState('0px')
    const [expand,setExpand] = useState(false)
    const [categories,setCategories] = useState<CategoriesType[]>([])

    const expandAndCollapse = () =>{
        setExpand((prevExpand) => !prevExpand)
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
            setCategories(categoriesData)
        }catch(err){
            console.warn('Something wrong')
        }
    }

    useEffect(() =>{
        fetchItems()
        console.log(categories)
    },[categoriesData])



  return (
      <Fragment>
    <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px] text-white '>
            <div className=' col-span-5'>
                <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]' placeholder='Search keywords' type='text' />
            </div>
            <div className='col-span-3'>
                <select className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div className='col-span-3'>
                <select className=' w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                    <option value="ka">ka</option>
                </select>
            </div>
            <div className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff]'>
                <button className='text-black' >Search</button>
            </div>
        </div>
        {expand ? <div className='flex relative '>
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
        </div> : ''}
    </div>
    <div className='flex justify-center'>
        <div onClick={expandAndCollapse} className=' w-[50px] bg-[#323259] text-center'>
            <KeyboardArrowDown className='h-full cursor-pointer transition-transform '/>
        </div>
    </div>
    </Fragment>
  )
}

export default SearchProductForm
