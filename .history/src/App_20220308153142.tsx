import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  const [session,setSession] = useState(false)
  useEffect(() =>{
    if(sessionStorage.getItem('status' === '200')){
      setSession(true)
    }else{
      setSession(false)
    }
  },[sessionStorage])
  // let loginSuccess
  //   if(sessionStorage.getItem('status') === '200'){
  //       loginSuccess = true;
  //   }else{
  //     loginSuccess = false
  //   }
  return (
    <Fragment>
    {session ?? <Header />}
    <div className='flex w-full'>
    {session ?? <Navbar /> } 
    <Router />
    </div>  
    </Fragment>
  );
}

export default App;
