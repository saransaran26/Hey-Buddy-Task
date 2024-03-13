import React, { useState } from "react";
import twitter from "../assets/Twitter-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Createaccount from "./Createaccount";
import Login from "./Login";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[isloginopen,setloginopen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeLogin = () => {
    setloginopen(false);
  };
  return (
    <div className="w-full h-screen grid grid-col-1 md:grid-cols-2 bg-gray-100">
      <div>
        <img
          className="w-full h-screen object-cover object-center hidden md:block"
          src={twitter}
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center h-screen bg-black text-white">
        <div className="ml-16">
          <h1 className="text-5xl md:text-6xl font-bold">Heppening now</h1>
          <p className=" text-2xl md:text-3xl font-semibold mt-5">Join twitter today</p>

          <button className="border border-solid border-black flex items-center justify-center my-5 w-[300px] px-4 py-2 rounded-full text-xl bg-white text-black">
            <FcGoogle /> <p className="ml-2">Sign up with Google</p>
          </button>
          <button className="border border-solid border-black flex items-center justify-center mt-5 w-[300px] px-4 py-2 rounded-full text-xl bg-white text-black">
            <FaApple className="text-xl"/> <p className="ml-2">Sign up with Apple</p>
          </button>
          <p className="text-2xl font-semibold my-2 w-[300px] flex justify-center">
            or
          </p>
          <button className="border border-solid border-blue-500 flex items-center justify-center w-[300px] px-4 py-2 rounded-full text-xl bg-blue-500 text-white font-medium hover:bg-blue-600 hover:border-blue-600"
          onClick={openModal}
          >
            Create account
          </button>
          <div className="w-[300px] mt-1 whitespace-normal">
            <p>
              By signing up, you agree to the{" "}
              <span className="text-blue-500">Terms of Service</span> and{" "}
              <span className="text-blue-500">Privacy Policy,</span> including{" "}
              <span className="text-blue-500">Cookie Use.</span>
            </p>
          </div>
          <p className="mt-7 font-medium">Already have an account?</p>
          <button className="border border-solid border-slate-200 flex items-center justify-center w-[300px] px-4 py-2 rounded-full text-xl mt-3 font-medium text-blue-600"
          onClick={()=>setloginopen(!isloginopen)}
          >
           Sign in
          </button>
        </div>
      </div>
      {isModalOpen && <Createaccount onClose={closeModal} setloginopen={setloginopen} isloginopen={isloginopen}/>}
      {isloginopen && <Login oncloselogin={closeLogin} />}
    </div>
  );
}

export default Home;
