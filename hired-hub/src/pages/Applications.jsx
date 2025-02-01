import React, { useState } from 'react';

import Navbar from '../components/Navbar'

const Applications = () => {

    const [isEdit, setIsEdit] = useState(false)
    return (
        <>
            <Navbar/>

            <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10 mt-20'>
                <h2 className='text-xl font-semibold '>Your Resume</h2>
                <div className='flex gap-2 mb-6 mt-3'>
                    {
                        isEdit 
                        ? <>
    
                        </>
                        : <div className='flex gap-2 '>
                            <a className='bg-blue-100 text-blue-400 px-2 py-2 border border-sky-400 rounded-lg' href="">Resume</a>
                            <button className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Applications;