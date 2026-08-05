import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Error404() {
  const navigate = useNavigate()
  return (
    <>

      <div className='py-12 min-h-screen text-center space-y-3.5'>
        <h3 className='text-3xl text-white font-bold mb-8'>
          OOPS! Page not Found
        </h3>

        <Link onClick={() => { navigate(-1)}} to={"/"} className='px-4 py-2 bg-amber-50 rounded-xl shadow cursor-pointer text-black font-semibold animate-pulse '>
          ⬅ Back
        </Link>
        
    </div>
    </>
  )
}
