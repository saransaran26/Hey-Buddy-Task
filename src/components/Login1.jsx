import React from 'react'
import image from '../assets/login.jpg'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

function Login1() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src={image} alt="/" className='absolute w-full h-full object-cover mix-blend-overlay'/>
        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center'>Sign up</h2>
                <div className='flex justify-between py-8'>
                    <p className='border flex items-center py-2 px-6 relative shadow-lg hover:shadow-xl cursor-pointer'><FcGoogle className='mr-2'/> Google</p>
                    <p className='border flex items-center py-2 px-6 relative shadow-lg hover:shadow-xl cursor-pointer'><AiFillFacebook className='mr-2'/> Facebook</p>
                </div>
                <div className='flex flex-col py-2 relative'>
                    <label>Username</label>
                    <input className='border-2 mt-1 p-3' type="text" />
                </div>
                <div className='flex flex-col py-2 relative'>
                    <label >Password</label>
                    <input className='border-2 mt-1 p-3' type="password" />
                </div>
                <button className='w-full py-4 my-2 border bg-indigo-600 text-white hover:bg-indigo-500 relative'>Sign in</button>
                <div className='py-4 relative'>
                    <p><input type="checkbox" className='mr-2'/>Remember me</p>
                    <p className='mt-6 cursor-pointer text-center'>Not a member Register now</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login1