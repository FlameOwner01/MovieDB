import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../../styles/detailsView.css";
import {getMovie, getShow} from "../services/apiService";
import {FetchContext} from "../../FetchContext";

const base_url = "http://image.tmdb.org/t/p/";
const poster_size = "w500";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const DetailsView = () =>{


    const [show, setShow] = useState<any[]>([]);
    const [search, setSearch] = useContext(FetchContext);
    let navigate = useNavigate();
    let obj_id = useParams();
    let id = obj_id.id




    async function findMovie () {
        let temp = await getMovie(id);
        console.log(temp);
        setShow(temp);
    }

    async function findShow (){
        let temp = await getShow(id);
        setShow(temp);
    }

    useEffect(()=>{
        if(search==="movie"){
            findMovie();
        }else{
            findShow()
        }
    }, [])

type ObjectKey = keyof typeof show;

    const backdrop_path = "backdrop_path" as ObjectKey;
    let title;
    const overview = "overview" as ObjectKey;

    if(search==="movie"){
         title = "title" as ObjectKey;
    }else{
        title ="name" as ObjectKey;
    }


    return(

       <div className="detailsView">
            <button className="backButton" onClick={()=>{navigate(-1)}}>Back</button>
            <div className = "view-box">
                <img className="backdrop-img" src={
                    show[backdrop_path]
                        ? `${base_url}${poster_size}${show[backdrop_path]}`
                        : unavailable
                }/>
            </div>
            <div className={"details"}>
                <p className={"title"}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title:<br/> {show[title]}</p>
                <p className={"overview"}>&nbsp;&nbsp;&nbsp;Overivew: <br/>{show[overview]}</p>
            </div>
        </div>


    )
}

export default DetailsView