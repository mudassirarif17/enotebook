import React from 'react'

const NoteCard = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center my-10 text-2xl font-bold'>All Notes</h1>
      <div className='card shadow-2xl shadow-black w-[95%] rounded-xl p-6'>
        <h2 className='font-bold text-2xl'>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi odit hic eaque neque accusamus dignissimos alias aspernatur, possimus cupiditate atque blanditiis ratione.</p>
        <div className='flex justify-between mt-5'>
          <p className='border border-black px-2  rounded-lg'>Tag</p>
          <div className='flex space-x-2'>
          <p>Edit</p>
          <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard