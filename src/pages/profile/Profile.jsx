import React, { useEffect, useContext, useState } from 'react';
import Layout from '../../components/layout/Layout'
import { FaUserCircle } from "react-icons/fa";
import myContext from '../../context/data/mycontext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
  const context = useContext(myContext);
  const {user , setUser , userData} = context;

  const [col, setCol] = useState();
  const path = "/src/images/";

  

  const navigate = useNavigate();

  useEffect(() => {
      if(!localStorage.getItem("token")){
        navigate('/login');
      }
      else{
        navigate("/profile");
        setCol(Math.floor(Math.random() * 1000000));
        
      }
      userData();
  }, [])

  console.log(col);

  return (
    <div className='flex flex-col md:flex-row'>
      <Layout />
      <div className='w-full'>
        <div className='flex-col items-center flex mt-20'>
          {/* <h1 className='text-center text-6xl'><FaUserCircle className='' /></h1> */}
          {/* <div style={{backgroundColor : "#"+col}} className='w-[50px] h-[50px] rounded-full flex justify-center items-center'><h1 className='text-white text-2xl'>{user.name ? user.name[0] : ''}</h1></div> */}
          <div><img className='w-[200px] h-[200px] rounded-full mb-6' src={path+user.image} alt="some error"/></div>
          <h3 className='text-2xl font-bold text-center'>{user.name}</h3>
          <h6 className='font-semibold text-center'>{user.email}</h6>
          <Link to="/updateprofile" className='btn bg-pink-600 text-white px-4 py-2 mt-2 rounded-lg text-lg font-semibold'>Update profile</Link>
        </div>
      </div>


    </div>
  )
}

export default Profile