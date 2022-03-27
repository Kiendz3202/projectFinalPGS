import React, { lazy } from 'react';
import { Route, Routes,BrowserRouter,Navigate } from 'react-router-dom';
import {ROUTES} from './config/Routes'
import ProtectedRoute from './ProtectedRoute';
import { Suspense } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import NewUserPage from './pages/NewUserPage';
import ProductListPage from './pages/ProductListPage';
import NewProductPage from './pages/NewProductPage';


const UserListPage = lazy(() => import('./pages/UserListPage'));
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
        <Route path='/userlist' element={<UserListPage />} />
        <Route path='/productlist' element={<ProductListPage />} />
        <Route path='/new-user' element={<NewUserPage />} />
        <Route path='/new-product' element={<NewProductPage />} />
        <Route path="/" element={<Navigate to='/home/userlist' />} />
      </Routes>
      </div>
    </Suspense>
  );
};

export default Router