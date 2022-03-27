import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Navbar() {
  return (
    <div className=' w-[216px] max-w-[216px] px-[20px] py-[10px] h-screen bg-[#323259]'>
        <ul>
            <li><LocalOfferIcon /> Catalog</li>
            <li><GroupIcon /> User</li>
        </ul>
    </div>
  )
}

export default Navbar