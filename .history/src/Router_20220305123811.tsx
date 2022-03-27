import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {ROUTES} from './src/config/Routes'
import ProtectedRoute from './ProtectedRoute';
import { Suspense } from 'react';

const HomePage = lazy(() => import('./src/pages/HomePage'));
const LoginPage = lazy(() => import('./src/pages/HomePage'));

interface Props {}

export default const Router = (props: Props) => {

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path={ROUTES.login} element={LoginPage} />
        <Route path={ROUTES.home} element={HomePage} />
        <Route path="/" element={LoginPage} />
      </Routes>
    </Suspense>
  );
};