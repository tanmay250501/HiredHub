import React from "react";

const JobCardLoading = () => {
    return (
        <div className="border p-6 shadow rounded hover:shadow-lg transition-shadow animate-pulse">
            <div className="flex justify-between items-center">
                <div className="h-8 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded mt-2 w-3/4"></div>
            <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded mt-4"></div>
            <div className="mt-4 flex gap-4 text-sm">
                <div className="h-10 w-24 bg-gray-300 rounded"></div>
                <div className="h-10 w-24 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default JobCardLoading;
