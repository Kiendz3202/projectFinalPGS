import React from 'react'
import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
  return (
    <div className='w-full p-[20px] bg-slate-400'>
        <div className='w-full flex justify-center h-[36px] '>
        <div>
            <ul>
                <li><ListIcon /></li>
                <li>Gear Focus Admin</li>
                <li><PersonOutlineIcon /></li>
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