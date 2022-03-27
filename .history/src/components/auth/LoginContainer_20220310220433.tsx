import React from 'react'
import { Route } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'

function LoginContainer() {
  return (
    <div>
        <Route path='/login' element={<LoginPage />} />
    </div>
  )
}

export default LoginContainer