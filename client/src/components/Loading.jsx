import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col py-10 container px-4 sm:px-8 2xl:px-20 mx-auto mt-20 animate-pulse">
          <div className="bg-white text-black rounded-lg w-full shadow-lg">
            {/* Job Header Skeleton */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 p-6 lg:p-12 bg-gray-100 border border-gray-300 rounded-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="h-24 w-24 bg-gray-300 rounded-lg p-4 mr-4 max-md:mb-4"></div>
                <div className="text-center md:text-left">
                  <div className="h-6 bg-gray-300 rounded w-40 mb-2"></div>
                  <div className="flex flex-wrap gap-4 items-center mt-2 justify-center md:justify-start">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-center md:text-right">
                <div className="h-10 bg-gray-300 rounded w-32"></div>
                <div className="h-4 bg-gray-300 rounded w-24 mt-2"></div>
              </div>
            </div>
    
            {/* Job Description Skeleton */}
            <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-8">
              <div className="w-full lg:w-2/3">
                <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded w-32 my-10"></div>
              </div>
    
              {/* Related Jobs Skeleton */}
              <div className="lg:w-1/3 w-full lg:mt-0 mt-8 space-y-5">
                <div className="h-6 bg-gray-300 rounded w-40 mb-4"></div>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-16 bg-gray-300 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Loading;

