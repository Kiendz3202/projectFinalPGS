import React from 'react'

function ProductListPage() {
  return (
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white mb-[24px]'>
        <div className='text-[32px] mb-[16px]'>Search for users</div>
        <div>
          <SearchUserForm />
        </div>
        <div>
          <button className='text-[15px] block bg-[#b18aff] w-[88px] h-[34px] px-[12px] py-[6px]'>Add User</button>
        </div>
      </div>
      <div>
        userlist
      </div>
    </div>
  )
}

export default ProductListPage