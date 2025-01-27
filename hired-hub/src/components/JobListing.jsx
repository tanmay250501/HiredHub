import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets.js';
import JobCard from './JobCard.jsx';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};


const JobListing = () => {
  const { isSearch, searchFilter, setSearchFilter, jobs, currentPage, setCurrentPage } = useContext(AppContext);
  const [seletecdCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  
  const handleCategoryChange = (category) => {
    setSelectedCategories( prev => prev.includes(category) ? prev.filter( c => c!== category) : [...prev, category] 
  ) 
  }

  const handleLocationChange = (location) => {
    setSelectedLocations( prev => prev.includes(location) ? prev.filter( c => c!== location) : [...prev, location] 
  ) 
  }

  useEffect(() => {
    const matchesCategory = job => seletecdCategories.length === 0 || seletecdCategories.includes(job.category);
    const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    const newFilteredJobs = jobs.slice().reverse().filter(
      job => matchesCategory(job) && matchesLocation(job) && matchesSearchLocation(job) && matchesTitle(job)
    )

    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  },[jobs, selectedLocations, seletecdCategories, searchFilter])

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
                <input className='scale-125' 
                type="checkbox"
                onChange={() => handleCategoryChange(category)}
                checked = {seletecdCategories.includes(category)} />
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
                <input className='scale-125' 
                type="checkbox"
                onChange={()=> handleLocationChange(location)}
                checked = {selectedLocations.includes(location)} />
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
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Paggination */}
        {filteredJobs.length > 0 &&
          <div className='flex items-center justify-center space-x-2 mt-10'>
            <a href="#job-list">
              <img onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} src={assets.left_arrow_icon} alt="left arrow icon" />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
              <a href="#job-list" key={index}>
                <button onClick={() => setCurrentPage(index + 1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}>
                  {index + 1}
                </button>
              </a>
            ))}
            <a href="#job-list">
              <img onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredJobs.length / 6)))} src={assets.right_arrow_icon} alt="right arrow icon" />
            </a>
          </div>
        }
      </section>

    </div>
  );
};

export default JobListing;


