import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px]'>
            <div className=' col-span-5'>
                <input className='w-full h-[38px] py-[7px] px-[16px] outline-none' placeholder='Search keywords' type='text' />
            </div>
            <div className='col-span-3'>
                <select className='text-black w-full h-[38px] py-[7px] px-[16px] outline-none'>
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div className='col-span-3'>
                <select className='text-black w-full h-[38px] py-[7px] px-[16px] outline-none'>
                    <option value="ka">ka</option>
                </select>
            </div>
            <div className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff]'>
                <button >Search</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default SearchProductForm