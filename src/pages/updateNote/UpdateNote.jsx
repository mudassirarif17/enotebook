import React from 'react'
import Layout from '../../components/layout/Layout'


const UpdateNote = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        <div className='flex flex-col items-center'>
        <h1 className='text-center my-10 text-2xl font-bold'>Update Note</h1>
        <input className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="title" id="" placeholder='Title'/>
        <input className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' type="text" name="tag" id="" placeholder='Tag'/>
        <textarea className='w-[80%] my-3 p-2 rounded-lg border-2 border-gray-300' name="" id="" cols="30" rows="7" placeholder='Decription'></textarea>
        <button  className='text-xl font-semibold bg-pink-600 text-white px-2 py-1 w-[80%] rounded-lg active:bg-pink-400'>Update Note</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateNote;