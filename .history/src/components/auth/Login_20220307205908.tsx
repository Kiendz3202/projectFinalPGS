import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { ILoginValidation } from './auth';
import ValidateLoginForm from './ValidateLoginForm';

interface Props{
    onLogin(value:ILoginValidation):void;
    loading:boolean;
    errorMessage:string
}

const InvalidEmailWarn = () => {
    return <p>InValid email address</p>
}
const InvalidPasswordWarn = () => {
    return <p>Invalid password. Password must be at least 6 characters long, and capital letter at the beginning.</p>
}

function Login(props:Props) {
    const {onLogin,loading,errorMessage} = props;
    const [formValue,setFormValue] = useState({email:'',password:''})
    const [isValidated,setIsValidated] = useState({email:'',password:''})
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onSubmit = () =>{
        setIsValidated(ValidateLoginForm(formValue));
        // if(isValidated.email && isValidated.password){
        //     onLogin(formValue);
        // }else{
        //     return;
        // }
        if(isValidated.email || isValidated.password){
            return;
        }
        onLogin(formValue)

    }
    return (
        <div className=' max-w-[410px] w-full m-auto border-2 mt-[200px]'>
            <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }} className='flex flex-col w-[380px] p-[15px] bg-[#f3f3f3] drop-shadow-md'>
                <p className=' text-center text-[#212509] text-[28px] my-[18px]'>Login</p>
                <div className=' justify-center mb-[5px] '>
                    <input onChange={(e) => setFormValue({...formValue,email:e.target.value})} value={formValue.email} type="text" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Email' />
                    {isValidated.email ?? <p>{isValidated.email}</p>}
                </div>
                <div className=' justify-center mb-[10px] '>
                    <input onChange={(e) => setFormValue({...formValue,password:e.target.value})} value={formValue.password} type="password" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Password' />
                    {isValidated.password ?? <p>{isValidated.password}</p>}
                </div>
                <button className=' bg-[#70c282] h-[30px] rounded text-white font-medium'>
                    <LoginIcon />
                    Login
                </button>
                {errorMessage ?? <p>email or password is wrong!</p>}
            </form>
        </div>
    )
}

export default Login