import React from 'react'

function SearchUserForm() {
  return (
    <div className='bg-[#323259] w-full h-[304px] px-[2px] pt-[20px]'>
        <div>
            <div>
                <input placeholder='Search keywords' type='search' />
            </div>
            <div>
            <Multiselect
  displayValue="key"
  groupBy="cat"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      cat: 'Group 1',
      key: 'Option 1'
    },
    {
      cat: 'Group 1',
      key: 'Option 2'
    },
    {
      cat: 'Group 1',
      key: 'Option 3'
    },
    {
      cat: 'Group 2',
      key: 'Option 4'
    },
    {
      cat: 'Group 2',
      key: 'Option 5'
    },
    {
      cat: 'Group 2',
      key: 'Option 6'
    },
    {
      cat: 'Group 2',
      key: 'Option 7'
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