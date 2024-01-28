import React from 'react'
import Layout from '../../components/layout/Layout'
import NoteCard from '../../components/noteCard/NoteCard';


const Home = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        <NoteCard />
      </div>
    </div>
  )
}

export default Home