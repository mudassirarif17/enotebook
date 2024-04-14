import React , {useState} from 'react'
import Layout from '../../components/layout/Layout'
import { GiNotebook } from "react-icons/gi";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Forgetpassword = () => {
  const [email , setEmail] = useState("");

  const navigate = useNavigate();

  const forgotHandle = async (e) =>{

    e.preventDefault();
    const res = await fetch(`http://localhost:4000/api/auth/forget-password` , {
      method : "POST",
      headers : {
        'content-type' : "application/json"
      },
      body : JSON.stringify({email})
    })

    const forgotData = await res.json();
    if(forgotData.error){
      toast.error(forgotData.error, {
        position: "top-right",
        autoClose: 1000,  // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      localStorage.setItem('token' , forgotData.token)
        navigate('/reset-password');
    }

    setEmail("");

  }

  return (
    <div className='flex flex-col md:flex-row'>
      <ToastContainer />
    <Layout/>
    <div className='w-full'>
      <div className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl my-5'/>eNoteBook</h1>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[70%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="email" id="" placeholder='Email'/>
      <button onClick={forgotHandle} className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[70%] rounded-lg active:bg-pink-400'>Send Email</button>
      <button onClick={()=>navigate("/login")} className='cursor-pointer font-bold my-2 hover:underline '>Already Have An Account or Sign In</button>
      </div>
    </div>
  </div>
  )
}

export default Forgetpassword;