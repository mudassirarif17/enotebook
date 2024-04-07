import React from 'react';
import { Link } from 'react-router-dom';
import { GiNotebook } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const TopNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className=''>
      <h1 className='text-2xl font-bold text-center'><GiNotebook className='inline-block my-2 text-4xl'/>eNoteBook</h1>
      <ul className='h-14 font-bold bg-pink-200 flex justify-center space-x-8 items-center w-[100vw]'>
        <li></li>
        <Link to="/"><li className='flex flex-col items-center'><FaHome className='mx-2 text-2xl'/>Home</li></Link>
        <Link to="/addnote"><li className='flex flex-col items-center'><TfiWrite className='mx-2 text-2xl' />Add Note</li></Link>
        <Link to="/profile"><li className='flex flex-col items-center'><CgProfile className='mx-2 text-2xl' />Profile</li></Link>
        <Link to="/dashboard"><li className='flex flex-col items-center'><CgProfile className='mx-2 text-2xl' />DashBoard</li></Link>
        <button onClick={()=>navigate("/login")}><li className='flex flex-col items-center'><IoIosLogOut className='mx-2 text-2xl' />Logout</li></button>
      </ul>
    </div>
  )
}

export default TopNavbar;