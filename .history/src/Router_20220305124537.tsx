import React, { lazy } from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import {ROUTES} from './config/Routes'
import ProtectedRoute from '../ProtectedRoute';
import { Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

interface Props {}

const Router = (props: Props) => {

  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path={ROUTES.login} element={LoginPage} />
        <Route path={ROUTES.home} element={HomePage} />
        <Route path="/" element={LoginPage} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
};

export default Router