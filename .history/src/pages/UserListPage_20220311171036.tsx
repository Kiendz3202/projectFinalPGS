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
    <div className='bg-[#1b1b38] w-full h-screen ml-[216px] mt-[76px]'>
      <div className='p-[36px]'>
        123
      </div>
    </div>
    </Fragment>
  )
}

{/* <button onClick={signout}>signout</button> */}
export default UserListPage