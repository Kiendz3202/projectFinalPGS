import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

function HomePage() {
  const navigate = useNavigate()
  const signout = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    sessionStorage.removeItem("status")
    navigate('/login')
  }
  return (
    <Fragment>
    <Header />
    <div className='flex w-full'>
      <Navbar />
      <div>homepage</div>
    </div>
    {/* <button onClick={signout}>signout</button> */}
    </Fragment>
  )
}

export default HomePage