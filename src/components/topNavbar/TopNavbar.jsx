import React from 'react';
import { Link } from 'react-router-dom';
import { GiNotebook } from "react-icons/gi";

const TopNavbar = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center'><GiNotebook className='inline-block my-2 text-4xl'/>eNoteBook</h1>
      <ul className='h-14 font-bold bg-gray-200 flex justify-center space-x-6 items-center'>
        <li></li>
        <Link to="/"><li>Home</li></Link>
        <Link to="/addnote"><li>Add Note</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/logout"><li>Logout</li></Link>
      </ul>
    </div>
  )
}

export default TopNavbar;