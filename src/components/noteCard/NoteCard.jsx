import React, { useContext, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { Link } from 'react-router-dom'
import myContext from '../../context/data/mycontext';
import { ToastContainer, toast } from 'react-toastify';

const NoteCard = () => {

  
  const context = useContext(myContext);
  const { allnotes, loading, getAllNotes , deleteNote , searchnote , changeHandler } = context;
  // console.log(allnotes);

  useEffect(() => {
    getAllNotes();
  }, [])

  return (
    <div className='flex flex-col items-center h-[100vh]'>
      <div className='my-10'>
      <h1 className='text-center text-2xl font-bold'>All Notes</h1>
      <input onChange={changeHandler} className='my-4 border-2 border-gray-100 w-[60vw] px-2 py-2 rounded-xl' type="text" placeholder='Search'/>
      </div>
      <ToastContainer/>
      {
        searchnote && searchnote.map((data, index) => (
          <div key={index} className='card mb-6 shadow-xl shadow-black w-[95%] rounded-xl p-6'>
            <h2 className='font-bold text-2xl'>{data.title}</h2>
            <p>{data.description}</p>
            <div className='flex justify-between mt-5'>
              <p className='flex items-center border border-black px-2  rounded-lg'><FaTags className='inline-block mx-1' />{data.tag}</p>
              <div className='flex space-x-2'>
                <Link to={`/updatenote/${data._id}`}><FaEdit className='text-2xl cursor-pointer active:text-gray-500' /></Link>
                <MdDelete onClick={()=>deleteNote(data._id)} className='text-2xl cursor-pointer active:text-gray-500' />
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default NoteCard