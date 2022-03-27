import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'

function LoginContainer() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default LoginContainer