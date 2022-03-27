import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=' sticky w-[216px] max-w-[216px] px-[20px] py-[10px] h-screen bg-[#323259] text-white'>
        <ul>
          <Link to='/home/productlist'>
            <div className='flex justify-between text-[18px] border-b-[1px] py-[12px] border-black cursor-pointer'>
                <li><LocalOfferIcon className=' text-xs' /> Catalog</li>
                <li><ChevronLeftIcon /></li>
            </div>
          </Link>  
          <Link to='/home/userlist'>      
            <div className='flex justify-between text-[18px] border-b-[1px] py-[12px] border-black cursor-pointer'>
                <li><GroupIcon /> User</li>
                <li><ChevronLeftIcon /></li>
            </div>
          </Link>  
        </ul>
    </div>
  )
}

export default Navbar