import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import moment from 'moment';
import Jobcard from '../components/JobCard';
import Footer from '../components/Footer'

const ApplyJobs = () => {
    const { id } = useParams();
    const [JobData, setJobData] = useState(null);
    const { jobs } = useContext(AppContext);

    useEffect(() => {
        const fetchJobs = () => {
            if (jobs && jobs.length > 0) {
                const data = jobs.find(job => job._id === id);
                if (data) {
                    setJobData(data);
                    console.log("Fetched Job Data:", data);
                }
            }
        };
        fetchJobs();
    }, [id, jobs]);

    const convertToK = (salary) => {
        return salary ? `${salary / 1000}K` : 'N/A';
    };

    return JobData ? (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto mt-20">
                <div className="bg-white text-black rounded-lg w-full">
                    {/* Job Header */}
                    <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
                        <div className="flex flex-col md:flex-row items-center">
                            <img
                                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                                src={JobData?.companyId?.image || assets.placeholder}
                                alt="Company Logo"
                            />
                            <div className="text-center md:text-left text-neutral-700">
                                <h1 className="text-2xl sm:text-4xl font-medium">{JobData?.title}</h1>
                                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                                    <span className="flex items-center gap-1">
                                        <img src={assets.suitcase_icon} alt="Suitcase Icon" />
                                        {JobData?.companyId?.name || 'Unknown'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.location_icon} alt="Location Icon" />
                                        {JobData?.location || 'Location not specified'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.person_icon} alt="Person Icon" />
                                        {JobData?.level || 'N/A'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.money_icon} alt="Money Icon" />
                                        CTC: {convertToK(JobData?.salary)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
                            <button className="bg-blue-600 p-2.5 px-10 text-white rounded">Apply Now</button>
                            <p className="mt-1 text-gray-600">Posted {moment(JobData?.date).fromNow()}</p>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className="w-full lg:w-2/3">
                            <h2 className="font-bold text-2xl mb-4">Job Description</h2>
                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: JobData?.description || '' }}></div>
                            <button className="bg-blue-600 p-2.5 px-10 text-white rounded my-10">Apply Now</button>
                        </div>

                        {/* Related Jobs Section */}
                        <div className="lg:w-1/3 w-full lg:mt-0 mt-8 lg:ml-8 space-y-5">
                            <h2 className="font-bold text-xl mb-4">More jobs from {JobData?.companyId?.name}</h2>
                            {jobs
                                ?.filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id)
                                .slice(0, 4)
                                .map(job => (
                                    <Jobcard key={job._id} job={job} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    ) : (
        <Loading />
    );
};

export default ApplyJobs;
