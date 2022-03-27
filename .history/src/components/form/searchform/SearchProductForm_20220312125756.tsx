import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px] text-white'>
            <div className=' col-span-5'>
                <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]' placeholder='Search keywords' type='text' />
            </div>
            <div className='col-span-3'>
                <select className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]'>
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div className='col-span-3'>
                <select className=' w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547]'>
                    <option value="ka">ka</option>
                </select>
            </div>
            <div className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff]'>
                <button className='text-black' >Search</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default SearchProductForm