import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ILoginValidation } from '../components/auth/auth'
import Login from '../components/auth/Login'
import { loginActions } from '../store/loginSlice';


function LoginPage() {
  const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const onLogin = async (value:ILoginValidation) =>{
      try{
        const response = await fetch('https://api.gearfocus.div4.pgtest.co/api/authentication/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          email:value.email,
          password:value.password
        })
      })
      if(!response){
        throw new Error('something wrong')
        return;
      }
      const data = await response.json()
      if(!data.user_cookie){
        return;
      }
      sessionStorage.setItem("token",data.user_cookie)
      dispatch(loginActions.login())
      navigate('/home')
      }catch(errorMessage){
        console.warn(errorMessage)
      }
    }
    return (
        <Login onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
    )
}

export default LoginPage
