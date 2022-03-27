import React from 'react'
import Multiselect from 'multiselect-react-dropdown'

function SearchUserForm() {
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
                    onRemove={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    onSelect={function noRefCheck(){}}
                    options={[
                        {
                        cat: 'Memberships',
                        key: 'General'
                        },
                        {
                        cat: 'Pending memberships',
                        key: 'General'
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

export default SearchUserForm