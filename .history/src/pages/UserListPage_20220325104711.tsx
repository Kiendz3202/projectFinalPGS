import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchUserForm from '../components/form/searchform/SearchUserForm'
import UserList from '../components/list/UserList'

function UserListPage() {
  const navigate = useNavigate()
  const signout = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    sessionStorage.removeItem("status")
    navigate('/login')
  }
  return (
    <div className='bg-[#1b1b38] w-full h-full ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white '>
        <div className='text-[32px] mb-[16px]'>Products</div>
        <div className='mb-[40px]'>
          <SearchUserForm />
        </div>
        <div onClick={() => navigate('/home/new-product')} className='mb-[24px]'>
          <button className='text-[15px] block bg-[#b18aff] min-w-[110px] h-[34px] px-[12px] py-[6px] rounded-sm'>Add Products</button>
        </div>
      </div>
      <div>
        <UserList />
      </div>
      <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
        <Save />
      </div>
    </div>
  )
}

{/* <button onClick={signout}>signout</button> */}
export default UserListPage