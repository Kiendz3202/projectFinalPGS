import React,{useState} from 'react'
import { ILoginValidation } from '../components/auth/auth'
import Login from '../components/auth/Login'


function LoginPage() {
    const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
    const onLogin = (value:ILoginValidation) =>{

    }

    return (
        <Login onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
    )
}

export default LoginPage
