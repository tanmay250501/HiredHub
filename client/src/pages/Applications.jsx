import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(jobsApplied.length / jobsPerPage);

  // Get jobs for the current page
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobsApplied.slice(startIndex, startIndex + jobsPerPage);

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 min-h-[65vh] 2xl:px-20 my-10 mt-20">
        <h2 className="text-2xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 cursor-pointer">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img
                  className="cursor-pointer"
                  src={assets.profile_upload_icon}
                  alt=""
                />
              </label>
              <button
                onClick={(e) => setIsEdit(false)}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-2 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Jobs Applied</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Company</th>
                <th className="py-3 px-4 border-b text-left">Job Title</th>
                <th className="py-3 px-4 border-b text-left hidden sm:table-cell">
                  Location
                </th>
                <th className="py-3 px-4 border-b text-left hidden sm:table-cell">
                  Date
                </th>
                <th className="py-3 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  {/* Company Column */}
                  <td className="py-3 px-4 border-b align-middle">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-8 h-8 object-contain"
                        src={job.logo}
                        alt="Company Logo"
                      />
                      <span className="text-sm font-medium">{job.company}</span>
                    </div>
                  </td>

                  {/* Job Title Column */}
                  <td className="py-3 px-4 border-b align-middle">{job.title}</td>

                  {/* Location Column */}
                  <td className="py-3 px-4 border-b hidden sm:table-cell align-middle">
                    {job.location}
                  </td>

                  {/* Date Column */}
                  <td className="py-3 px-4 border-b hidden sm:table-cell align-middle">
                    {moment(job.date).format("ll")}
                  </td>

                  {/* Status Column */}
                  <td className="py-3 px-4 border-b align-middle font-medium">
                    <span
                      className={`inline-flex items-center justify-center w-32 h-10 rounded-lg font-medium ${job.status === "Accepted"
                          ? "bg-green-100 text-green-800 border border-green-400"
                          : job.status === "Rejected"
                            ? "bg-red-100 text-red-800 border border-red-400"
                            : "bg-blue-100 text-blue-800 border border-blue-400"
                        }`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        {jobsApplied.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            {/* Previous Page */}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                }
                src={assets.left_arrow_icon}
                alt="left arrow icon"
                className="cursor-pointer"
              />
            </a>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <a href="#job-list" key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1
                    ? "bg-blue-100 text-blue-500"
                    : "text-gray-500"
                    }`}
                >
                  {index + 1}
                </button>
              </a>
            ))}

            {/* Next Page */}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(prevPage + 1, totalPages)
                  )
                }
                src={assets.right_arrow_icon}
                alt="right arrow icon"
                className="cursor-pointer"
              />
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Applications;
