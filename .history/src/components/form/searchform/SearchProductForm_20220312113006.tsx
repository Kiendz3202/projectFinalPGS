import React from 'react'

function SearchProductForm() {
  return (
    <div className='bg-[#323259] w-full h-[304px] px-[2px] pt-[20px]'>
        <div className='flex'>
            <div>
                <input placeholder='Search keywords' type='search' />
            </div>
            <div>
                <Multiselect
                placeholder='All memberships'
                    displayValue="key"
                    groupBy="cat"
                    onKeyPressFn={function noRefCheck(){}}
                    onRemove={(event) => console.log(event)}
                    onSearch={(event) => console.log(event)}
                    onSelect={(event) => console.log(event)}
                    options={[
                        {
                        cat: 'Memberships',
                        key: 'General'
                        },
                        {
                        cat: 'Pending memberships',
                        key: 'General '
                        }
                    ]}
                    showCheckbox
                    />
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default SearchProductForm