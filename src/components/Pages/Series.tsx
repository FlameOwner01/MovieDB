import React, {useContext, useEffect, useState} from 'react'
import '../../styles/page.css';
import {getSeries, searchSeries} from "../services/apiService";
import TvBlock from "./assets/TvBlock";
import {TermContext} from "../../TermContext";
import {Link} from "react-router-dom";
import LoadingSpinner from "./assets/LoadingSpinner";
import {FetchContext} from "../../FetchContext";

const Series = () =>{


    const [series, setSeries] = useState([]);
    const [term, setTerm] = useContext(TermContext);
    const [search, setSearch] = useContext(FetchContext);
    const [activeMovies, setActiveMovies] = useState("");
    const [activeSeries, setActiveSeries] = useState("activeButton");
    const [spinner, setSpinner] = useState(false);


    async function fetchSeries (){
        const temp = await getSeries();
        setSeries(temp.results);
        return temp;
    }

    async function fetchSearchSeries(){
        const temp = await searchSeries(term);
        setSeries(temp.results);
        setSpinner(false);
        return temp;
    }


    useEffect(()=>{
        fetchSeries();
        setSearch("show");
    },[])

    useEffect(()=>{
        if(term.length>=3){
            fetchSearchSeries();
            setSpinner(true);
        }else{
            fetchSeries()
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
                series &&
                series.map(({backdrop_path,name, overview, poster_path, vote_average , id}, index) =>{
                    if(index>=10) return null;
                    return(
                        <TvBlock
                            backdrop_path = {backdrop_path}
                            title={name}
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


export default Series