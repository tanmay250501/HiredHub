import { createContext, useEffect } from "react";
import { useState } from "react";
import { jobsData } from "../assets/assets";


export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:"",
        location:""
    });

    const [isSearch, setIsSearch] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () =>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs();
    },[])

    const value ={
        setSearchFilter,searchFilter,
        setIsSearch,isSearch,
        setJobs,jobs,
        setCurrentPage,currentPage
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}