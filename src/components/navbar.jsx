import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyNavbar() {
  const [theme, setTheme] = useState("mytheme");
  const [isCartOpen, setIsCartOpen] = useState(false); // เพิ่มสถานะสำหรับ Cart Modal

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "mytheme" : "dracula");
  };

  const textClass = theme === "dracula" ? "mytheme" : "dracula";

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="bg-base-100 shadow sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className={`select-none text-xl font-bold md:text-2xl hover:text-neutral-focus ${textClass}`}>
                Shopping Green
              </Link>
            </div>
            <div className=''>
              <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="dracula" onChange={toggleTheme} />
                <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg className="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="flex md:hidden">
              <button type="button" className={`hover:text-neutral-focus focus:outline-none focus:text-neutral-focus ${textClass}`} aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link className={`select-none my-1 text-sm font-medium hover:text-primary md:mx-4 md:my-0 ${textClass}`} to="/">Home</Link>
              <Link className={`select-none my-1 text-sm font-medium hover:text-primary md:mx-4 md:my-0 ${textClass}`} to="/shop">Shop</Link>
              <Link className={`select-none my-1 text-sm font-medium hover:text-primary md:mx-4 md:my-0 ${textClass}`} to="/contact">Contact</Link>
              <Link className={`select-none my-1 text-sm font-medium hover:text-primary md:mx-4 md:my-0 ${textClass}`} to="/signin">Sign in</Link>
            </div>
            <div className="flex justify-center md:block">
              {/* Cart Icon */}
              <button onClick={toggleCartModal} className={`relative hover:text-neutral-focus ${textClass}`} aria-label="cart">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute top-0 left-0 rounded-full bg-primary text-white p-1 text-xs"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Your Cart</h2>
              <div className="py-4">
                <p>No items in the cart.</p>
              </div>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={toggleCartModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyNavbar;
