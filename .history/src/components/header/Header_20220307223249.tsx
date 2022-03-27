import React from 'react'
import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='w-full p-[20px] bg-[#323259] text-white'>
        <div className='w-full flex justify-between h-[36px] '>
        <div>
            <ul className='flex'>
                <li className='text-[24px]'><ListIcon /></li>
                <li className='text-[28px]'>Gear Focus Admin</li>
                <li className='text-[20px]'><PersonOutlineIcon /></li>
            </ul>
        </div>
        <div>
            <PersonOutlineIcon />
        </div>
        </div>
    </div>
  )
}

export default Header