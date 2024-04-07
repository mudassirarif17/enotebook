import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { GiNotebook } from "react-icons/gi";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image , setImage] = useState('');

  const navigate = useNavigate();

  const SignUpHandle = async (e) => {
    const formdata = new FormData();
    formdata.append('name' , name);
    formdata.append('email' , email);
    formdata.append('password' , password);
    formdata.append('image' , image);
    try {
      e.preventDefault();
      const res = await axios.post(`http://localhost:4000/api/auth/signup` , formdata , {
        headers : {"Content-Type" : "multipart/form-data"}
      });
      if(res.error){
        toast.error(res.error, {
          position: "top-right",
          autoClose: 1000,  // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }else{
        setName('');
        setEmail('');
        setPassword('');
        setImage(null);
        setTimeout(()=>{
          navigate('/login');
        },1000)
        toast.success("User Created", {
          position: "top-right",
          autoClose: 1000,  // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log("Error" , error);
    }
  }

  return (
    <div className='flex flex-col md:flex-row'>
       <ToastContainer />

      <Layout />
      <div className='w-full'>

        <div className='h-full flex flex-col items-center justify-center'>

          <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl my-5' />eNoteBook</h1>

          <input value={name} onChange={(e) => setName(e.target.value)} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="name" id="" placeholder='Name' />

          <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="email" id="" placeholder='Email' />

          <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="password" id="" placeholder='Password' />

          <input onChange={(e) => setImage(e.target.files[0])} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="file" name="image"/>

          <button onClick={SignUpHandle} className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[70%] rounded-lg active:bg-pink-400'>Log In</button>

          <button onClick={() => navigate("/login")} className='cursor-pointer font-bold my-2 hover:underline '>Have an Account or Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp