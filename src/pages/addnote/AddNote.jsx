import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/mycontext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const AddNote = () => {
  const context = useContext(myContext)
  const { title, description, tag, setTitle, setDescription, setTag, addNote , alarm , setAlarm } = context;

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
    else{
      navigate("/addnote");
    }
  },[])

  return (
    <div className='flex flex-col md:flex-row'>
      <Layout />
      <ToastContainer/>
      <div className='w-full'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center my-10 text-2xl font-bold'>Add Note</h1>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-[80%] my-2 p-2 rounded-lg border-2 border-gray-300' type="text" name="title" id="" placeholder='Title' />
          <input value={tag} onChange={(e) => setTag(e.target.value)} className='w-[80%] my-2 p-2 rounded-lg border-2 border-gray-300' type="text" name="tag" id="" placeholder='Tag' />
          <input value={alarm} onChange={(e) => setAlarm(e.target.value)} className='w-[80%] my-2 p-2 rounded-lg border-2 border-gray-300' type="date" name="alarm" id="" placeholder='Alarm' />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-[80%] my-2 p-2 rounded-lg border-2 border-gray-300' name="" id="" cols="30" rows="7" placeholder='Decription'></textarea>
          <button className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[80%] rounded-lg active:bg-pink-400' onClick={addNote}>Add Note</button>
        </div>
      </div>
    </div>
  )
}

export default AddNote