import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {ROUTES} from './src/config/Routes'
import ProtectedRoute from './ProtectedRoute';

const HomePage = lazy(() => import('./src/pages/HomePage'));
const LoginPage = lazy(() => import('./src/pages/HomePage'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes location={location}>
        <Route path={ROUTES.login} element={LoginPage} />
        <Route path={ROUTES.home} element={HomePage} />
        <Route path="/" element={LoginPage} />
      </Routes>
    </Suspense>
  );
};