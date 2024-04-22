"use client";
import React from 'react'
import { auth } from '../../Firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const AddTableButton = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <button
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit'
    >
      Add New Time Table
    </button>
  )
}

export default AddTableButton