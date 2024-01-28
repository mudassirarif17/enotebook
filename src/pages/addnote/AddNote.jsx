import React from 'react'
import Layout from '../../components/layout/Layout'

const AddNote = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Layout/>
      <div className='w-full'>
        Add Note
      </div>
    </div>
  )
}

export default AddNote