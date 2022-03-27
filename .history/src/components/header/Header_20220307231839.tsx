import React from 'react'
import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='w-full p-[20px] bg-[#323259] text-white'>
        <div className='w-full flex justify-between h-[36px] '>
        <div className='leading-[36px]'>
            <ul className='flex cursor-pointer'>
                <li className='text-[28px] mr-[22px]'><ListIcon /></li>
                <li className='text-[28px]'>Gear Focus Admin</li>
                <li className=' text-[20px]'><NotificationsNoneIcon /></li>
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