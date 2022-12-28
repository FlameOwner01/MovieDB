import React, {useContext} from 'react'
import SearchBar from './SearchBar'
import '../../styles/navbar.css'
import { useNavigate, Link } from 'react-router-dom'
import {TermContext} from "../../TermContext";


const NavBar = () => {

    const navigate = useNavigate();
    const [term, setTerm] = useContext(TermContext);



    return(
        <div className="navbar">
            <button className="backButton" onClick={()=> navigate(-1)}>Previous</button>
            <button className ="backSign" onClick={()=> navigate(-1)}>&laquo;</button>
            <button className="forwardButton" onClick={()=> navigate(1)}>Next</button>
            <button className="forwardSign" onClick={()=> navigate(1)}>&raquo;</button>
            <Link to="/">
            <button className="home" onClick={()=>{setTerm("")}}>Home</button>
            </Link>
            <button className="exit" onClick={()=> navigate(-1)}>X</button>
            <SearchBar/>
        </div>
    )
}

export default NavBar;