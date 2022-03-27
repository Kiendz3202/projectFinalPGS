import React from 'react'
import {Redirect} from 'react-router-dom'
import Routes from './src/config/Routes'

function ProtectedRoute() {
  return (
    <Redirect to={{
      pathname:Routes.login
    }} />
  )
}

export default ProtectedRoute

import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';
import { RouteSharp } from '@mui/icons-material';

interface Props extends RouteProps {}

const ProtectedRoute = (props: Props) => {
  const { ...rest } = props;
  const auth = Cookies.get(ACCESS_TOKEN_KEY);

  if (auth) {
    return <Route {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: ROUTES.login,
      }}
    />
  );
};

export default ProtectedRoute;