import React from 'react'
import Layout from '../../components/layout/Layout'
import { GiNotebook } from "react-icons/gi";
import { useNavigate } from 'react-router';

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row'>
    <Layout/>
    <div className='w-full'>
      <div className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl my-5'/>eNoteBook</h1>
      <input className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="email" id="" placeholder='Email'/>
      <input className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="password" id="" placeholder='Password'/>
      <button className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[70%] rounded-lg active:bg-pink-400'>Log In</button>
      <button onClick={()=>navigate("/signup")} className='cursor-pointer font-bold my-2 hover:underline '>Create New Account or Sign Up</button>
      </div>
    </div>
  </div>
  )
}

export default Login