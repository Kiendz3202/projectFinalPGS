import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Routes from './src/config/Routes'
import ProtectedRoute from './ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('./src/pages/HomePage'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <Route path={ROUTES.home} component={HomePage} />
        <Route path="/" component={LoginPage} />
      </Routes>
    </Suspense>
  );
};