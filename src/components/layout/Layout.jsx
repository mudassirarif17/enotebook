import React from 'react';
import TopNavbar from "../topNavbar/TopNavbar"; 
import Sidebar from "../sidebar/Sidebar"; 
import NoteCard from '../noteCard/NoteCard';

const Layout = ({children}) => {
  return (
    <div className=''>

      <div className='md:hidden'>
        <TopNavbar className="sticky top-0"/>
      </div>

      <div className='hidden md:block'>
          <Sidebar/>
      </div>
      <div className='w-full'>
        {/* {children} */}
      </div>
    </div>
  )
}

export default Layout