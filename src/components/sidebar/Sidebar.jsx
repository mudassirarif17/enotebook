import React , {useState , useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MdDashboardCustomize } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/mycontext';


const Sidebar = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const {user , userData} = context;

  const logout = () =>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  useEffect(()=>{
    userData();
  },[])
  
  return (
    <div className='h-[100vh] bg-pink-200 w-72 '>
      <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl'/>eNoteBook</h1>
      <ul className='font-bold flex flex-col items-center space-y-10'>
        <li></li>
        <Link to="/"><li className='cursor-pointer'><FaHome className='inline-block mx-2 text-2xl'/>Home</li></Link>
        <Link to="/addnote"><li className='cursor-pointer'><TfiWrite  className='inline-block mx-2 text-2xl' />Add Note</li></Link>
        <Link to="/profile"><li ><CgProfile className='inline-block mx-2 text-2xl' />Profile</li></Link>
        {user.status ?<Link to="/dashboard"><li ><MdDashboardCustomize className='inline-block mx-2 text-2xl' />DashBoard</li></Link> : ""}

        <button onClick={logout} ><li><IoIosLogOut className='inline-block mx-2 text-2xl' />Logout</li></button>
      </ul>
    </div>
  )
}

export default Sidebar