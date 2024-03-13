import React from 'react'
import { ImCancelCircle } from "react-icons/im";

function Login({ oncloselogin }) {
    return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className='bg-white text-3xl rounded-full mb-80'>
            <ImCancelCircle className='cursor-pointer' onClick={oncloselogin}/>
            </div>
            <div className="bg-white p-8 rounded-md">
                
                <h2 className="text-2xl font-bold mb-4">Log in to Twitter</h2>
        <form action="">
            <div className='w-[360px] border border-solid border-black my-4'>
                <input type="text" placeholder='Phone number,email address' className='px-2 py-3 w-full'/>
            </div>
            <div className='w-[360px] border border-solid border-black my-4'>
                <input type="text" placeholder='Password' className='px-2 py-3 w-full'/>
            </div>
            <button
          className="bg-blue-500 text-white px-4 py-2 w-[360px] rounded-full
          hover:bg-blue-600
          "
         onClick={oncloselogin}
        >
          Log In
        </button>
            <div className='w-[350px] flex justify-between mt-4'>
                <p className='text-blue-600'>Forgot password?</p>
                <p className='text-blue-600 cursor-pointer' onClick={oncloselogin}>Sign up to Twitter</p>
            </div>
        </form>
            </div>
            
        </div>
    </>
    )
}

export default Login