import React, {createContext, useState} from "react";


export const TermContext = createContext<[any, React.Dispatch<React.SetStateAction<any>>]>([{term:""}, ()=>{}]);

export const TermProvider = ({children} : any) =>{
    const [term, setTerm] = useState("");

    return <TermContext.Provider value={[term, setTerm]}>
        {children}
    </TermContext.Provider>
}



