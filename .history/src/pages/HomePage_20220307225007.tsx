import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const signout = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    sessionStorage.removeItem("statusText")
    navigate('/login')
  }
  return (
    <Fragment>
    <div className='bg-[#1b1b38]'>HomePage</div>
    {/* <button onClick={signout}>signout</button> */}
    </Fragment>
  )
}

export default HomePage