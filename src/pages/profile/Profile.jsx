import React from 'react';
import Layout from '../../components/layout/Layout'

const Profile = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        <div className='flex-col items-center flex mt-20'>
          <div className='bg-gray-300 w-[100px] h-[100px] rounded-full'><h1 className='text-center'>dp</h1></div>
          <h3 className='text-2xl font-bold text-center'>Mudassir Arif</h3>
          <h6 className='font-semibold text-center'>mudassir@aptechgdn.net</h6>
        </div>
      </div>
    </div>
  )
}

export default Profile;