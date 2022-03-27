import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full px-[2px] pt-[20px]'>
        <div className='grid grid-cols-12 gap-3 h-[62px]'>
            <div>
                <input className=' w-[504px]' placeholder='Search keywords' type='search' />
            </div>
            <div>
                <select className='text-black w-[214px]'>
                    <option value="volvo">Volvo</option>
                </select>
            </div>
            <div>
                <select className='text-black w-[214px]'>
                    <option value="ka">ka</option>
                </select>
            </div>
            <div className='w-[72px] h-[34px] px-[12px] py-[6px] bg-[#b18aff]'>
                <button>Search</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default SearchProductForm