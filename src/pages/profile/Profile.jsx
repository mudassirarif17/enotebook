import React from 'react';
import Layout from '../../components/layout/Layout'
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        <div className='flex-col items-center flex mt-20'>
          <h1 className='text-center text-6xl'><FaUserCircle className=''/></h1>
          <h3 className='text-2xl font-bold text-center'>Mudassir Arif</h3>
          <h6 className='font-semibold text-center'>mudassir@aptechgdn.net</h6>
        </div>
      </div>
    </div>
  )
}

export default Profile;