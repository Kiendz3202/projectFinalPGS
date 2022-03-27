import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { ILoginValidation } from './auth';

const InvalidEmailWarn = () => {
    return <p>InValid email address</p>
}
const InvalidPasswordWarn = () => {
    return <p>Invalid password. Password must be at least 6 characters long, and capital letter at the beginning.</p>
}

function Login() {
    const [email,setEmail] = React.useState<ILoginValidation>('');
    const [password,setPassword] = React.useState<ILoginValidation>('');
    const submitHandle = () =>{

    }
    return (
        <div className=' max-w-[410px] w-full m-auto border-2 mt-[200px]'>
            <form onSubmit={submitHandle} className='flex flex-col w-[380px] p-[15px] bg-[#f3f3f3] drop-shadow-md'>
                <p className=' text-center text-[#212509] text-[28px] my-[18px]'>Login</p>
                <div className=' justify-center mb-[5px] '>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Email' />
                </div>
                <div className=' justify-center mb-[10px] '>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Password' />
                </div>
                <button className=' bg-[#70c282] h-[30px] rounded text-white font-medium'>
                    <LoginIcon />
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login