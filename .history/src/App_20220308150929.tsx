import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  let loginSuccess
  if(sessionStorage.getItem('statusText') === 'OK'){
      loginSuccess = true;
  }else{
    loginSuccess = false
  }
  return (
    <Fragment>
    <Header />
    <div className='flex w-full'>
    {loginSuccess ?? <Navbar /> } 
    <Router />
    </div>  
    </Fragment>
  );
}

export default App;