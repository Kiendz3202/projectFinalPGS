import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'

function LoginContainer() {
  return (
    <div>
        <Routes>
        <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default LoginContainer