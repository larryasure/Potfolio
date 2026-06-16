import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
  const navigate = useNavigate()
  return (
    <>

      <div className='py-12 min-h-screen text-center space-y-3.5'>
        <h3 className='text-3xl text-white font-bold'>
          OOPS! Page not Found
        </h3>

        <button onClick={() => navigate(-1)} className='px-4 py-2 bg-amber-50 rounded-xl shadow cursor-pointer text-black font-semibold animate-pulse '>
          ⬅️ Back
        </button>
        
    </div>
    </>
  )
}
