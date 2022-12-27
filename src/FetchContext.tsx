import React, {createContext, useState} from "react";

export const FetchContext = createContext<[any, React.Dispatch<React.SetStateAction<any>>]>([{search: ""}, ()=>{}]);


export const FetchProvider = ({children} : any) =>{
    let [search, setSearch] = useState("");

    return <FetchContext.Provider value={[search, setSearch]}>
        {children}
    </FetchContext.Provider>

}