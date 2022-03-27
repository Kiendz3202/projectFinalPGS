import React from 'react'
import { Navigate, Route,RouteProps } from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import {ROUTES} from './config/Routes'
import HomePage from './pages/HomePage'


interface Props extends RouteProps {}

function ProtectedRoute(props: Props) {
  const {...rest} = props
  const auth = 0
  if(auth){
    return <HomePage />
  }
  return (
    <Navigate to={ROUTES.login} />
  )
}

export default ProtectedRoute

// import React from 'react';
// import { Redirect, Route, RouteProps } from 'react-router-dom';
// import { ROUTES } from '../../../configs/routes';
// import Cookies from 'js-cookie';
// import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
// import { RouteSharp } from '@mui/icons-material';

// interface Props extends RouteProps {}

// const ProtectedRoute = (props: Props) => {
//   const { ...rest } = props;
//   const auth = Cookies.get(ACCESS_TOKEN_KEY);

//   if (auth) {
//     return <Route {...rest} />;
//   }

//   return (
//     <Redirect
//       to={{
//         pathname: ROUTES.login,
//       }}
//     />
//   );
// };

// export default ProtectedRoute;