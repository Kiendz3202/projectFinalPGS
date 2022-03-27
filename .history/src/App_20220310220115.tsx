import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux';
import { ROUTES } from './config/Routes';
import {Route} from 'react-router-dom'


function App() {
  

  return (
    <div>
    <Route path={ROUTES.login} element={<LoginPage />} />
    <Route element={<Router />} />
    </div>
  );
}

export default App;
