import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Router from './Router';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
    <Header />  
    <Router />
    </Fragment>
  );
}

export default App;
