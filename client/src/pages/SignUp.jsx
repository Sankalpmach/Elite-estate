import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function SignUp() {
  const [formData,setFormData] = useState({})
  const handleChange= (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
    console.log(formData);
  }
  const handleSubmit=async (e) => {
    e.preventDefault();
    const res=await fetch('/api/auth/signup',formData);
    
  }
  return (
    <div className='pd-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Sign Up</h1>

      <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
