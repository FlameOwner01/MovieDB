import React, {useContext, useEffect, useState} from 'react'
import '../../styles/page.css';
import {getMovies, searchMovies} from "../services/apiService";
import TvBlock from "./assets/TvBlock";
import {TermContext} from "../../TermContext";
import {Link} from "react-router-dom";
import LoadingSpinner from "./assets/LoadingSpinner";
import {FetchContext} from "../../FetchContext";

const Movies = () =>{

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useContext(TermContext);
    const [search, setSearch] = useContext(FetchContext);
    const [activeMovies, setActiveMovies] = useState("");
    const [activeSeries, setActiveSeries] = useState("activeButton");
    const [spinner, setSpinner] = useState(false);

    async function fetchMovies (){
        const temp = await getMovies();
        setMovies(temp.results);
        return temp;
    }

    async function fetchSearchMovies(){
        const temp = await searchMovies(term);
        setMovies(temp.results);
        setSpinner(false);
        return temp;
    }

    useEffect(()=>{
        fetchMovies();
        setSearch("movie");
    },[])

    useEffect(()=>{
        if(term.length>=3){
            fetchSearchMovies()
            setSpinner(true);
        }else{
            fetchMovies()
        }
    }, [term])


    return(
        <>
        <div className="buttonsCenter">
            <Link to="/movies">
                <button className={`moviesButton ${activeMovies}`}
                        onClick={()=> {
                            setActiveMovies("activeButton");
                            setActiveSeries("");
                        }}
                >Movies</button>
            </Link>
            <Link to="/series">
                <button className={`seriesButton ${activeSeries}`}
                        onClick={()=>{
                            setActiveSeries("activeButton");
                            setActiveMovies("");
                        }}
                >TV Shows</button>
            </Link>
        </div>
            {spinner && <LoadingSpinner/>}
        <div className={"row"}>

            {

                movies &&
                movies.map(({backdrop_path, title, overview, poster_path, vote_average , id}, index) =>{
                    if(index>=10) return null;
                    return(
                        <TvBlock
                            backdrop_path = {backdrop_path}
                            title = {title}
                            overview = {overview}
                            poster_path = {poster_path}
                            vote_average = {vote_average}
                            id = {id}
                            key={id}
                        />
                    )
                })
            }
        </div>
        </>
    );
}


export default Movies