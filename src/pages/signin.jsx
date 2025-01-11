import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center h-screen select-none">
      <div className="card bg-white shadow-2xl w-1/2 relative">
        <div className="absolute card bg-primary h-full w-[50%] right-0"></div>
        <div className="card-body">
          <div className='flex justify-start'>
            <h1 className="card-title mb-10 ml-[10%] font-extrabold text-3xl text-black">Sign in</h1>
          </div>
          <div className='flex justify-center'>
            <h1 className="card-title font-extrabold text-2xl absolute bottom-48 text-black">O R</h1>
          </div>
          <div className='flex justify-end'>
            <h1 className="card-title mr-[10%] font-extrabold text-3xl absolute top-20 text-black">Hello</h1>
            <p className='text-lg absolute pt-2.5 mr-[2.5%] text-center font-bold text-black'>Don't Have an Account?<br />sign up here</p>
            <div className="card-actions flex justify-end pt-20 absolute mr-[9%]">
              <button onClick={handleSignUp} className="absolute btn bg-base text-base font-bold w-24 top-28 ">Sign up</button>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
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
          </div>
          <div className='mb-5 mt-5'>
            <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-black" onClick={() => document.getElementById('forgot').showModal()}>Forgot password?</a>
            <dialog id="forgot" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Forgot your password?!</h3>
                <p className="py-4">WHY!!</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="card-actions justify-start">
            <button className="flex item-start btn bg-base ml-[10%] text-base font-bold w-24 ">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
