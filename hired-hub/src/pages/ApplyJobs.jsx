import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ApplyJobs = () => {

    const {id} = useParams()

    const [JobData, setJobData] = useState(null)

    const {jobs} = useContext(AppContext)

    const fetchJobs = async () =>{
        const data = jobs.filter(job => job._id === id)
        if(data.length !== 0){
            setJobData(data[0])
            console.log(data[0])
        }
    }

    useEffect(()=>{
        fetchJobs()
    },[id])

    return (
        <div>
            Apply Jobs Page
        </div>
    );
};

export default ApplyJobs;