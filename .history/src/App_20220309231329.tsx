import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { useDispatch } from 'react-redux';


function App() {
   

  return (
    <Fragment>
    <Header />
    <div className='flex w-full'>
    <Navbar /> 
    <Router />
    </div>  
    </Fragment>
  );
}

export default App;
