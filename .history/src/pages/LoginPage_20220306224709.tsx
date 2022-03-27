import React,{useState} from 'react'
import { ILoginValidation } from '../components/auth/auth'
import Login from '../components/auth/Login'


function LoginPage() {
    const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
    const onLogin = async (value:ILoginValidation) =>{
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
      console.log(response)
    }

    return (
        <Login onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
    )
}

export default LoginPage
