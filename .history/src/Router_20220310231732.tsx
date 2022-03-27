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
      <div className='flex'>
        <Navbar />
      <Routes>
        {/* <Route path={ROUTES.login} element={<LoginPage />} /> */}
        <Route path='/userlist' element={<HomePage />} />
        <Route path="/" element={<Navigate to='/userlist' />} />
      </Routes>
      </div>
    </Suspense>
  );
};

export default Router