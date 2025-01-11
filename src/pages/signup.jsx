import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signin');
  };

  return (
    <div className="flex justify-center items-center h-screen select-none">
      <div className="card bg-white shadow-2xl w-1/2 relative">
        <div className="absolute card bg-primary h-full w-[50%] right-0"></div>
        <div className="card-body">
          <div className='flex justify-start'>
            <h1 className="card-title mb-10 ml-[10%] font-extrabold text-3xl text-black">Sign up</h1>
          </div>
          <div className='flex justify-center'>
            <h1 className="card-title font-extrabold text-2xl absolute bottom-56 text-black">OR</h1>
          </div>
          <div className='flex justify-end'>
            <h1 className="card-title mr-[10%] font-extrabold text-3xl absolute top-30 text-black">Hello</h1>
            <p className='text-lg absolute pt-[7%] mr-[2.5%] text-center font-bold text-black'>Already Have an Account?<br />sign in here</p>
            <div className="card-actions flex justify-end absolute mr-[9%]">
              <button onClick={handleSignUp} className="absolute btn bg-base text-base font-bold w-24 top-36">Sign in</button>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="relative">
              <input
                type="username"
                id="username"
                placeholder=' '
                className="bg-white w-[45%] px-4 py-2 border border-gray-300 bg-base-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-primary peer"
              />
              <label
                htmlFor="username"
                className="bg-white absolute left-4 -top-3.5 text-gray-600 bg-base-100 px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-primary"
              >
                Enter your username
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=' '
                className="bg-white w-[45%] px-4 py-2 border border-gray-300 bg-base-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-primary peer"
              />
              <label
                htmlFor="email"
                className="bg-white absolute left-4 -top-3.5 text-gray-600 bg-base-100 px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-primary"
              >
                Enter your email
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder=' '
                className="bg-white w-[45%] px-4 py-2 border border-gray-300 bg-base-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-primary peer"
              />
              <label
                htmlFor="password"
                className="bg-white absolute left-4 -top-3.5 text-gray-600 bg-base-100 px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-primary"
              >
                Enter your password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                placeholder=' '
                className="bg-white w-[45%] px-4 py-2 border border-gray-300 bg-base-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-primary peer"
              />
              <label
                htmlFor="confirm-password"
                className="bg-white absolute left-4 -top-3.5 text-gray-600 bg-base-100 px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-primary"
              >
                Confirm your password
              </label>
            </div>
          </div>
          <div className="card-actions justify-start mt-10">
            <button className="flex item-start btn bg-base ml-[10%] text-base font-bold w-24">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
