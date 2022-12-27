import React from 'react'
import SearchBar from './SearchBar'
import '../../styles/navbar.css'
import { useNavigate, Link } from 'react-router-dom'


const NavBar = () => {

    const navigate = useNavigate();


    return(
        <div className="navbar">
            <button className="backButton" onClick={()=> navigate(-1)}>Previous</button>
            <button className ="backSign" onClick={()=> navigate(-1)}>&laquo;</button>
            <button className="forwardButton" onClick={()=> navigate(1)}>Next</button>
            <button className="forwardSign" onClick={()=> navigate(1)}>&raquo;</button>
            <Link to="/">
            <button className="home">Home</button>
            </Link>
            <button className="exit" onClick={()=> navigate(-1)}>X</button>
            <SearchBar/>
        </div>
    )
}

export default NavBar;