import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  let session = sessionStorage.getItem('status')
  let loginSuccess
  useEffect(() =>{
    if(sessionStorage.getItem('status') === '200'){
        loginSuccess = true;
    }else{
      loginSuccess = false
    }
  },[session])
  return (
    <Fragment>
    {loginSuccess ?? <Header />}
    <div className='flex w-full'>
    {loginSuccess ?? <Navbar /> } 
    <Router />
    </div>  
    </Fragment>
  );
}

export default App;
