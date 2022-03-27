import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector,RootStateOrAny } from 'react-redux';


function App() {
  const loginSuccess = useSelector((state: RootStateOrAny) => state.login.loginSuccess)
   console.log(loginSuccess)

  return (
    <Fragment>
    {isLogin ?? <Header />}
    <div className='flex w-full'>
    {isLogin ?? <Navbar />} 
    <Router />
    </div>  
    </Fragment>
  );
}

export default App;
