import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './components/auth/LoginContainer';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux';
import { ROUTES } from './config/Routes';
import {Navigate, Route, Routes} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';


function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={ROUTES.login} />} />
        <Route path={`${ROUTES.login}/*`} element={<LoginContainer />} />
        <Route path={`${ROUTES.home}/*`} element={<ProtectedRoute />} />
      </Routes>
    </div>
  );
}

export default App;
