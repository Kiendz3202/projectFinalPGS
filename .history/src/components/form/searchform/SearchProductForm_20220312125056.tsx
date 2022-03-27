import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full px-[20px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px]'>
            <div className=' col-span-5'>
                <input className='w-full' placeholder='Search keywords' type='search' />
            </div>
            <div className='col-span-3'>
                <select className='text-black w-full'>
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div className='col-span-3'>
                <select className='text-black w-full'>
                    <option value="ka">ka</option>
                </select>
            </div>
            <div className='col-span-1 h-[34px] px-[12px] py-[6px] bg-[#b18aff]'>
                <button>Search</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default SearchProductForm