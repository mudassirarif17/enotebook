import React , {useState} from 'react'
import Layout from '../../components/layout/Layout'
import { GiNotebook } from "react-icons/gi";
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const SignUp = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate();

  const SignUpHandle = async (e)=>{
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/signup" , {
      method : 'POST',
      headers : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify({name , email , password})
    })

    const signUpData = await res.json();

    if(signUpData.error){
      toast.error(signUpData.error)
    }
    else{
      toast.success(signUpData.success)
      navigate("/login")
    }

    setName("");
    setEmail("");
    setPassword("");

  }

  return (
    <div className='flex flex-col md:flex-row'>
    <Layout/>
    <div className='w-full'>

      <div className='h-full flex flex-col items-center justify-center'>

      <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl my-5'/>eNoteBook</h1>

      <input value={name} onChange={(e)=>setName(e.target.value)} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="name" id="" placeholder='Name'/>

      <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="email" id="" placeholder='Email'/>

      <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="password" id="" placeholder='Password'/>

      <button onClick={SignUpHandle} className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[70%] rounded-lg active:bg-pink-400'>Log In</button>

      <button onClick={()=>navigate("/login")} className='cursor-pointer font-bold my-2 hover:underline '>Have an Account or Login</button>
      </div>
    </div>
  </div>
  )
}

export default SignUp