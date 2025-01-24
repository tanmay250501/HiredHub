import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:"",
        location:""
    });

    const [isSearch, setIsSearch] = useState(false);

    const value ={
        setSearchFilter,searchFilter,
        setIsSearch,isSearch,
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}