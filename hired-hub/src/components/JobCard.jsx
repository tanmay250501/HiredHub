import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCart = ({ job }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        window.scrollTo(0, 0);  // Reset scroll position
        navigate(path);
    };

    return(
        <div className="border p-6 shadow rounded hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
                <img className="h-8" src={assets.company_icon} alt="Company Logo" />
            </div>
            <h4 className="font-medium text-xl mt-2">{job.title}</h4>
            <div className="flex items-center gap-3 mt-2 text-xs">
                <span className="bg-blue-50 border border-blue-200 px-2 py-1.5 rounded">{job.location}</span>
                <span className="bg-red-50 border border-red-200 px-2 py-1.5 rounded">{job.level}</span>
            </div>
            <div className="text-gray-500 mt-4 text-sm line-clamp-3">
                {job.description.replace(/<[^>]+>/g, '').slice(0, 150)}...
            </div>
            <div className="mt-4 flex gap-4 text-sm">
                <button 
                    onClick={() => handleNavigation(`/jobs/${job._id}`)}
                    className="text-gray-500 border border-gray-500 px-4 py-2 rounded hover:bg-gray-50"
                >
                    Learn more
                </button>
                <button 
                    onClick={() => handleNavigation(`/apply-job/${job._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Apply now
                </button>
            </div>
        </div>
    )
}

export default JobCart;