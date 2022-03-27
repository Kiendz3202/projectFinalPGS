import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Navbar() {
  return (
    <div className=' w-[216px] max-w-[216px] px-[20px] py-[10px] h-screen bg-[#323259] text-white'>
        <ul>
            <div className='flex justify-between text-[18px] border-b-1 border-black'>
                <li><LocalOfferIcon className=' text-xs' /> Catalog</li>
                <li><ChevronLeftIcon /></li>
            </div>    
            <div className='flex justify-between text-[18px]'>
                <li><GroupIcon /> User</li>
                <li><ChevronLeftIcon /></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar