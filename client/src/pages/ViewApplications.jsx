import React, { useState } from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

const ViewApplications = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Calculate total pages using viewApplicationsPageData length
  const totalPages = Math.ceil(viewApplicationsPageData.length / jobsPerPage);

  // Get jobs for the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = viewApplicationsPageData.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-200 text-sm max-sm:text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">User Name</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Resume</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((applicant, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b text-center">
                  {startIndex + index + 1}
                </td>
                <td className="py-2 px-4 border-b items-center flex">
                  <img
                    className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
                    src={applicant.imgSrc}
                    alt="Applicant"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {applicant.jobTitle}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {applicant.location}
                </td>
                <td className="py-2 px-4 border-b">
                  <a
                    className="bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center"
                    href={applicant.resumeLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Resume Download Icon"
                    />
                  </a>
                </td>
                <td className="py-2 px-4 border-b relative">
                  <div className="relative inline-block text-left group">
                    <button className="text-gray-500 action-button">...</button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border-gray-200 rounded shadow group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Render pagination only if there's more than one page */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            {/* Previous Page */}
            <button
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
              }
              className="cursor-pointer"
            >
              <img
                src={assets.left_arrow_icon}
                alt="left arrow icon"
              />
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
                setCurrentPage((prevPage) =>
                  Math.min(prevPage + 1, totalPages)
                )
              }
              className="cursor-pointer"
            >
              <img
                src={assets.right_arrow_icon}
                alt="right arrow icon"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
