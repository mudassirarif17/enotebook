import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaTags } from "react-icons/fa";

const NoteCard = () => {
  return (
    <div className='flex flex-col items-center h-[100vh]'>

      <h1 className='text-center my-10 text-2xl font-bold'>All Notes</h1>

      <div className='card mb-6 shadow-xl shadow-black w-[95%] rounded-xl p-6'>
        <h2 className='font-bold text-2xl'>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi odit hic eaque neque accusamus dignissimos alias aspernatur, possimus cupiditate atque blanditiis ratione.</p>
        <div className='flex justify-between mt-5'>
          <p className='flex items-center border border-black px-2  rounded-lg'><FaTags className='inline-block mx-1'/>Tag</p>
          <div className='flex space-x-2'>
          <FaEdit className='text-2xl cursor-pointer active:text-gray-500'/>
          <MdDelete className='text-2xl cursor-pointer active:text-gray-500'/>
          </div>
        </div>
      </div>

      <div className='card mb-6 shadow-xl shadow-black w-[95%] rounded-xl p-6'>
        <h2 className='font-bold text-2xl'>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi odit hic eaque neque accusamus dignissimos alias aspernatur, possimus cupiditate atque blanditiis ratione.</p>
        <div className='flex justify-between mt-5'>
          <p className='flex items-center border border-black px-2  rounded-lg'><FaTags className='inline-block mx-1'/>Tag</p>
          <div className='flex space-x-2'>
          <FaEdit className='text-2xl cursor-pointer'/>
          <MdDelete className='text-2xl cursor-pointer'/>
          </div>
        </div>
      </div>

      <div className='card mb-6 shadow-xl shadow-black w-[95%] rounded-xl p-6'>
        <h2 className='font-bold text-2xl'>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi odit hic eaque neque accusamus dignissimos alias aspernatur, possimus cupiditate atque blanditiis ratione.</p>
        <div className='flex justify-between mt-5'>
          <p className='flex items-center border border-black px-2  rounded-lg'><FaTags className='inline-block mx-1'/>Tag</p>
          <div className='flex space-x-2'>
          <FaEdit className='text-2xl cursor-pointer'/>
          <MdDelete className='text-2xl cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard