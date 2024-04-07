import React from 'react';
import Layout from '../../components/layout/Layout';

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full overflow-auto'>
      <h1>Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard
