import React, { useState } from 'react';
import { assets, manageJobsData } from '../assets/assets';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ManageJobs = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Calculate total pages using manageJobsData length
  const totalPages = Math.ceil(manageJobsData.length / jobsPerPage);

  // Get jobs for the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = manageJobsData.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className='container p-4 max-w-5xl'>
      <div className='flex justify-end mb-4'>
        <button
          onClick={() => navigate('/dashboard/add-job')}
          className='bg-blue-600 rounded px-4 py-2 text-white hover:bg-blue-700'
        >
          Add New Job
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>Job Title</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-2 px-4 border-b text-center'>Applicants</th>
              <th className='py-2 px-4 border-b text-left'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => (
              <tr key={index} className='text-gray-700'>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  {startIndex + index + 1}
                </td>
                <td className='py-2 px-4 border-b'>{job.title}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  {moment(job.date).format('ll')}
                </td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                <td className='py-2 px-4 border-b'>
                  <input className='scale-125 ml-4' type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            {/* Previous Page */}
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              className="cursor-pointer"
            >
              <img src={assets.left_arrow_icon} alt="left arrow icon" />
            </button>
            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-100 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
            {/* Next Page */}
            <button
              onClick={() =>
                setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
              }
              className="cursor-pointer"
            >
              <img src={assets.right_arrow_icon} alt="right arrow icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobs;
