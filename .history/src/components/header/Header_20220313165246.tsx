import React from 'react'
import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='fixed w-full p-[20px] bg-[#323259] text-white shadow-xl z-10'>
        <div className='w-full flex justify-between h-[36px] '>
        <div className='leading-[36px]'>
            <ul className='flex '>
                <li className='text-[28px] mr-[22px] cursor-pointer'><ListIcon /></li>
                <li className='text-[28px] cursor-pointer'>Gear Focus Admin</li>
                <li className=' text-[20px] cursor-pointer'><NotificationsNoneIcon /></li>
            </ul>
        </div>
        <div className='leading-[36px] cursor-pointer'>
            <PersonOutlineIcon />
        </div>
        </div>
    </div>
  )
}

export default Header