import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets.js';
import { AppContext } from '../context/AppContext';

const Hero = () => {
  const { setIsSearch, setSearchFilter } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearch(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    // Clear input fields
    titleRef.current.value = '';
    locationRef.current.value = '';
  };

  return (
    <div className='container 2xl:px-20 mx-auto my-10 mt-20'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ Jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Apply to jobs that are 100% genuine, not dummy listings. Find your dream job with confidence.</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.search_icon} alt="search icon" />
            <input ref={titleRef} type="text" placeholder='Search for Jobs' className='max-sm text-xs p-2 rounded outline-none w-full' />
          </div>
          <div className='flex items-center'>
            <img className='h-4 sm:h-5' src={assets.location_icon} alt="search icon" />
            <input ref={locationRef} type="text" placeholder='Location' className='max-sm text-xs p-2 rounded outline-none w-full' />
          </div>
          <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1 hover:bg-blue-700 transition-colors duration-200'>Search</button>
        </div>
      </div>
      <p className='font-medium text-lg text-center mt-5'>Trusted by</p>
      <div className='border border-gray-300 shadow-md mx-2 mt-2 p-6 rounded-md flex overflow-hidden'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-nowrap animate-scroll'>
          <img className='h-6' src={assets.microsoft_logo} alt="Microsoft" />
          <img className='h-6' src={assets.walmart_logo} alt="Walmart" />
          <img className='h-6' src={assets.accenture_logo} alt="Accenture" />
          <img className='h-6' src={assets.samsung_logo} alt="Samsung" />
          <img className='h-6' src={assets.amazon_logo} alt="Amazon" />
          <img className='h-6' src={assets.adobe_logo} alt="Adobe" />
          <img className='h-6' src={assets.microsoft_logo} alt="Microsoft" />
          <img className='h-6' src={assets.walmart_logo} alt="Walmart" />
          <img className='h-6' src={assets.accenture_logo} alt="Accenture" />
          <img className='h-6' src={assets.samsung_logo} alt="Samsung" />
          <img className='h-6' src={assets.amazon_logo} alt="Amazon" />
          <img className='h-6' src={assets.adobe_logo} alt="Adobe" />
        </div>
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .animate-scroll {
              display: flex;
              animation: scroll 60s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
