import React, { useState } from 'react';

function Shop() {
  const products = Array(120).fill({ details: 'Hello this is product details', cate: 'Test category', tsell: '999', price: '999' }); // Mock 12 products for demonstration
  const [visibleProducts, setVisibleProducts] = useState(6); 

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 24);
  };

  return (
    <div>
      <div>
        <h1 className='mt-[10%] text-2xl font-bold ml-20 select-none'>Category</h1>
        <div className='grid grid-cols-6 gap-5 justify-center mt-5 ml-[12%] mr-[12%] select-none'>
          {products.slice(0, 6).map((product, index) => (
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

      <h1 className='mt-[10%] text-2xl font-bold ml-20'>Top sell</h1>
      <div className='grid grid-cols-6 gap-5 justify-center mt-5 ml-[6%] mr-[6%]'>
        {products.slice(0, 6).map((product, index) => (
          <div key={index} className='flex flex-col items-center bg-neutral shadow pt-3 pl-3 pr-3 pb-3 rounded-lg'>
            <div className='card h-40 w-40 bg-base-100'></div>
            <div className='text-sm font-semibold mt-2'>{product.details}</div>
            <div className='text-sm font-bold text-error'>{product.price} $</div>
            <div className='text-xs font-semibold text-[#bebebe]'>{product.tsell} Sold</div>
          </div>
        ))}
      </div>

      <h1 className='mt-[5%] text-2xl font-bold ml-20'>All Products</h1>
      <div className='grid grid-cols-6 gap-5 justify-center mt-5 ml-[6%] mr-[6%]'>
        {products.slice(0, visibleProducts).map((product, index) => ( 
          <div key={index} className='flex flex-col items-center bg-neutral shadow pt-3 pl-3 pr-3 pb-3 rounded-lg'>
            <div className='card h-40 w-40 bg-base-100'></div>
            <div className='text-sm font-semibold mt-2'>{product.details}</div>
            <div className='text-sm font-bold text-error'>{product.price} $</div>
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-12">
          <div onClick={showMoreProducts} className='text-black cursor-pointer card h-12 w-32 bg-primary btn rounded-full shadow-lg border border-neutral flex justify-center items-center'>
            Show More
          </div>
        </div>
      )}

      <p className='mt-[50%] text-transparent select-none'>Hi this is eater egg</p>
    </div>
  );
}

export default Shop;
