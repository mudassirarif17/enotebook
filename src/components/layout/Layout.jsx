import React from 'react';
import TopNavbar from "../topNavbar/TopNavbar"; 
import Sidebar from "../sidebar/Sidebar"; 
import NoteCard from '../noteCard/NoteCard';

const Layout = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row'>

      <div className='md:hidden'>
        <TopNavbar/>
      </div>

      <div className='hidden md:block'>
          <Sidebar/>
      </div>
      <div className='w-full'>
        <NoteCard />
      </div>
    </div>
  )
}

export default Layout