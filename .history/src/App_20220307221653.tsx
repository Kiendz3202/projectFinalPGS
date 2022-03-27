import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';

function App() {
  return (
    <Fragment>
      <header className=' w-full h-5 bg-black'>this is header</header>
    <Router />
    </Fragment>
  );
}

export default App;
