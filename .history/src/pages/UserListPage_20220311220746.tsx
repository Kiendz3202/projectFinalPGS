import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function UserListPage() {
  const navigate = useNavigate()
  const signout = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    sessionStorage.removeItem("status")
    navigate('/login')
  }
  return (
    <Fragment>
    <div className='bg-[#1b1b38] w-full h-screen ml-[256px] mt-[76px] p-[36px]'>
      <div className='text-white'>
        <div className='text-[32px]'>Search for users</div>
        <div>form</div>
        <div>
          <button>Add user</button>
        </div>
      </div>
      <div>
        userlist
      </div>
    </div>
    </Fragment>
  )
}

{/* <button onClick={signout}>signout</button> */}
export default UserListPage