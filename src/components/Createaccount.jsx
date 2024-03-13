// SignUpModal.js
import React from 'react';
import { ImCancelCircle } from "react-icons/im";

const Createaccount = ({ onClose,setloginopen,isloginopen }) => {
  return (
    <>
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
        
        <form action="">
          <div className='w-[350px] border border-solid border-black'>
            <input type="text" placeholder='Name' className='px-2 py-3 w-full'/>
          </div>
          <div className='w-[350px] border border-solid border-black mt-5'>
            <input type="Number" placeholder='Phone' className='px-2 py-3 w-full'/>
          </div>
          <p className='text-blue-600 mt-3'>Use email</p>
          <p className='font-medium mt-3'>Date of birth</p>
          <p className='w-[350px]'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else</p>
          <div className='w-[350px] flex gap-3 mt-4'>
            <input type="text" placeholder='Month' className='border border-solid border-black w-[180px] p-2'/>
            <input type="Number" placeholder='Day' className='border border-solid border-black w-[75px] p-2'/>
            <input type="Number" placeholder='Year' className='border border-solid border-black w-[75px] p-2'/>
          </div>
          <div className='mt-6 flex gap-3'>
          <button
          className="bg-blue-500 text-white px-4 py-2 w-[170px] rounded-full
          hover:bg-red-500
          "
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 w-[170px] rounded-full
          hover:bg-blue-600
          "
          onClick={()=>
          {
            onClose()
            setloginopen(!isloginopen)
          }}
        >
          Next
        </button>
          </div>
        </form>
       
      </div>
    </div>
    </>
  );
};

export default Createaccount;
