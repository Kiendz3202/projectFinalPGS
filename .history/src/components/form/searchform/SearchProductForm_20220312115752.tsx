import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full px-[2px] pt-[20px]'>
        <div className='flex justify-between h-[62px]'>
            <div>
                <input placeholder='Search keywords' type='search' />
            </div>
            <div>
            <select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
  <option value="audi" selected>Audi</option>
</select>
            </div>
            <div>
                <select>Any stockstatus</select>
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