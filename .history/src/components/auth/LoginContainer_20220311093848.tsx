import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import { ROUTES } from '../../config/Routes'
import LoginPage from '../../pages/LoginPage'

function LoginContainer() {
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<Navigate to={ROUTES.login} />} /> */}
          <Route path='/' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default LoginContainer