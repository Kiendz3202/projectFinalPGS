import React, { lazy } from 'react';
import { Route, Routes,BrowserRouter,Navigate } from 'react-router-dom';
import {ROUTES} from './config/Routes'
import ProtectedRoute from './ProtectedRoute';
import { Suspense } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';


const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

interface Props {}

const Router = (props: Props) => {

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Header />
      <div>
        <Navbar />
      <Routes>
        {/* <Route path={ROUTES.login} element={<LoginPage />} /> */}
        <Route path='/' element={<ProtectedRoute />} />
        {/* <Route path="/" element={<Navigate to={ROUTES.login} />} /> */}
      </Routes>
      </div>
    </Suspense>
  );
};

export default Router