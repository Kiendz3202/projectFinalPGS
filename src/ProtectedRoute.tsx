import React from 'react'
import { Navigate, Route,RouteProps } from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import {ROUTES} from './config/Routes'
import Router from './Router'


interface Props extends RouteProps {}

function ProtectedRoute(props: Props) {
  const {...rest} = props
  const auth = sessionStorage.getItem('token')
  if(auth){
    return <Router />
  }
  return (
    <Navigate to={ROUTES.login} />
  )
}

export default ProtectedRoute
