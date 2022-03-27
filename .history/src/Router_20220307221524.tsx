import React, { lazy } from 'react';
import { Route, Routes,BrowserRouter,Navigate } from 'react-router-dom';
import {ROUTES} from './config/Routes'
import ProtectedRoute from './ProtectedRoute';
import { Suspense } from 'react';


const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

interface Props {}

const Router = (props: Props) => {

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <header>this is header</header>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.home} element={<ProtectedRoute />} />
        <Route path="/" element={<Navigate to={ROUTES.login} />} />
      </Routes>
    </Suspense>
  );
};

export default Router