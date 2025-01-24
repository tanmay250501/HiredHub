import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets.js';
import JobCard from './JobCard.jsx';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

const JobListing = () => {
  const { isSearch, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className='container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:space-x-8'>
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 bg-white p-4'>
        {/* Search Filter from Hero Component */}
        {isSearch && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-600'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>

                  {truncateText(searchFilter.title, 10)}
                  <img
                    onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt="cross icon"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                  {truncateText(searchFilter.location, 6)}
                  <img
                    onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt="cross icon"
                  />
                </span>
              )}
            </div>
          </>
        )}
        {/* Job categories */}
        <div className='hidden lg:block'> 
          <h4 className='font-medium text-lg py-4'>Search By Categories</h4>
          <ul className='space-y-2 text-gray-600 '>
            {JobCategories.map((category, index) => (
              <li key={index} className='flex gap-3 items-center'>
                <input className='scale-125' type="checkbox"  />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location categories */}
        <div className='hidden lg:block'> 
          <h4 className='font-medium text-lg py-4 pt-14'>Search By Location</h4>
          <ul className='space-y-2 text-gray-600 '>
            {JobLocations.map((location, index) => (
              <li key={index} className='flex gap-3 items-center'>
                <input className='scale-125' type="checkbox"  />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
        <p className='mb-8'>Get your desired job from top companies.</p>
      </section>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
        {jobsData.map((job, index) => (
            <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListing;


