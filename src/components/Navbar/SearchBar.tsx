import React, {useContext} from 'react'
import '../../styles/search.css'
import {TermContext} from "../../TermContext";

const SearchBar = () =>{


    const [term, setTerm] = useContext(TermContext);


    const handleChange = (e: { target: { value: any; }; }) =>{
        setTerm(e.target.value || "");
    }


    return (
        <input
            placeholder="Search for ..."
            className="search"
            value={term}
            onChange={event => handleChange(event)}
        ></input>

    );
}

export default  SearchBar;