import React from 'react'
import { Link } from 'react-router-dom'
import { GiNotebook } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className='h-[100vh] bg-gray-200 w-72 '>
      <h1 className='text-2xl font-bold text-center pt-8'><GiNotebook className='inline-block mx-2 text-4xl'/>eNoteBook</h1>
      <ul className='font-bold flex flex-col items-center space-y-10'>
        <li></li>
        <Link to="/"><li>Home</li></Link>
        <Link to="/addnote"><li>Add Note</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/logout"><li>Logout</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar