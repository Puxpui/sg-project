import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signin');
  };

  const products = Array(6).fill({ details: 'Hello this is product details', cate: 'Test category', tsell: '999', price: '999' });

  return (
    <div className=''>
      <div className='relative h-96 w-full bg-neutral select-none font-itim '>
        <h1 className='ml-10 text-white text-4xl font-bold pt-[5%] absolute'>
          An eco-friendly e-commerce website <br /> for a better world
        </h1>
        <div>
          <label className="input input-bordered flex absolute items-center mt-[15%] ml-10 w-[30%] rounded-full">
            <input type="text" className="grow" placeholder="Search" />
            <div className='card h-2 w-28 bg-primary btn rounded-full border border-base-100 ml-[22%] text-white'>
              Search
            </div>
          </label>
          <img className='h-96 w-full object-cover object-right-top select-none drag-none rounded-xl' draggable="false" src="https://i.imgur.com/5XjlSkR.jpeg" alt="Eco-friendly e-commerce banner" />
        </div>
      </div>
      <h1 className='mt-[5%] text-2xl font-bold ml-20 font-itim'>New products!!</h1>
      <div className='flex justify-center gap-[1%] mt-5 flex-wrap'>
        {products.map((product, index) => (
          <div key={index} className='flex flex-col items-center bg-neutral shadow pt-3 pl-3 pr-3 pb-3 rounded-lg'>
            <div className='card h-40 w-40 bg-base-100'></div>
            <div className='text-sm font-semibold mt-2'>{product.details}</div>
            <div className='text-sm font-bold text-error'>{product.price} $</div>
          </div>
        ))}
      </div>
      <div>
        <h1 className='mt-[10%] text-2xl font-bold ml-20 select-none font-itim'>Category</h1>
        <div className='flex justify-center gap-[1%] mt-5 flex-wrap select-none'>
          {products.map((product, index) => (
            <div key={index} className=''>
              <div className='card h-32 w-32 bg-base-100 btn rounded-full shadow-lg border border-neutral'>
                <div>
                  <div className='text-sm font-semibold mt-2 flex justify-center pt-[50%]'>{product.cate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className='mt-[10%] text-2xl font-bold ml-20 font-itim'>Top sell</h1>
      <div className='flex justify-center gap-[1%] mt-5 flex-wrap'>
        {products.map((product, index) => (
          <div key={index} className='flex flex-col items-center bg-neutral shadow pt-3 pl-3 pr-3 pb-3 rounded-lg'>
            <div className='card h-40 w-40 bg-base-100'></div>
            <div className='text-sm font-semibold mt-2'>{product.details}</div>
            <div className='text-sm font-bold text-error'>{product.price} $</div>
            <div className='text-xs font-semibold text-[#bebebe]'>{product.tsell} Sold</div>
          </div>
        ))}
      </div>
      <div className='flex justify-center font-itim'>
        <h1 className='mt-[20%] text-4xl font-bold absolute select-none'>
          Let's get started
          <button onClick={handleSignUp} className="shadow-lg select-none mt-5 ml-[20%] h-12 w-40 bg-primary text-white btn-ghost flex justify-center rounded-full">Sign Up</button>
        </h1>
      </div>
      <p className='mt-[50%] text-transparent select-none'>Hi this is eater egg</p>
    </div>
  );
}

export default HomePage;
