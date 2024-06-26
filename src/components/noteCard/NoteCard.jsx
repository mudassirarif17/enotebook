import React, { useContext, useEffect , useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { Link } from 'react-router-dom'
import myContext from '../../context/data/mycontext';
import { ToastContainer, toast } from 'react-toastify';

const NoteCard = () => {
  let [time , setTime] = useState("");

  const context = useContext(myContext);
  const path = "/src/images/";
  const { allnotes, loading, getAllNotes, deleteNote, searchnote, changeHandler , user , userData } = context;
  // console.log(allnotes);

  useEffect(() => {
    getAllNotes();
    userData();
    // Setup interval when component mounts
    const intervalId = setInterval(() => getTime(), 1000);
    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [])

  const getTime = () =>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mytime = h+":"+m;
    // console.log(typeof mytime);
    setTime(mytime);
  }

  return (
    <div className='flex flex-col items-center h-[100vh]'>
      <div className='my-10'>
        <h1 className='text-center text-2xl font-bold'>All Notes</h1>
        <input onChange={ changeHandler } className='my-4 border-2 border-gray-100 w-[60vw] px-2 py-2 rounded-xl' type="text" placeholder='Search' />
      </div>
      <ToastContainer />
      {
        searchnote && searchnote.map((data, index) => (
          
          <div key={ index } className='card mb-6 shadow-xl shadow-black w-[95%] rounded-xl p-6'>
            <div className='flex space-x-2 items-center my-5'>
              <img className='w-[40px] h-[40px] rounded-full' src={path+user.image} alt="profile" />
              <h2 className='text-md font-semibold'>{user.name}</h2>
              <p>{data.date}</p>
            </div>
            <h2 className='font-bold text-2xl'>{ data.title }</h2>
            <p>{ data.description }</p>
            {data.alarm == time ? toast.success("Chal Beta km krle", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }) : ""}
            <div className='flex justify-between mt-5'>
              <p className='flex items-center border border-black px-2  rounded-lg'><FaTags className='inline-block mx-1' />{ data.tag }</p>
              <div className='flex space-x-2'>
                <Link to={ `/updatenote/${data._id}` }><FaEdit className='text-2xl cursor-pointer active:text-gray-500' /></Link>
                <MdDelete onClick={ () => deleteNote(data._id) } className='text-2xl cursor-pointer active:text-gray-500' />
              </div>
            </div> 
          </div>
        ))
      }

    </div>
  )
}

export default NoteCard
