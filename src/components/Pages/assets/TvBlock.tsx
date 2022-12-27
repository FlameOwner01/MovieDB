import React, {FC} from "react";
import {Link} from "react-router-dom";

const base_url = "http://image.tmdb.org/t/p/";
const poster_size = "w300";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

interface Image {
    backdrop_path: string,
    title: string,
    overview: string,
    poster_path: string,
    vote_average: string,
    id: string
}

const TvBlock: FC<Image> = ({ backdrop_path, title, overview, poster_path, vote_average , id}) =>{

  return(
        <div className={"block"}>
        <Link to={{pathname: `/details/${id}`}}>
            <img
                className="poster-img"
                src={
                    poster_path
                        ? `${base_url}${poster_size}${poster_path}`
                        : unavailable
                }
                alt={id}
            />
        </Link>
            <h1 className="nameHeading">{title}</h1>
            <button className ="vote">{vote_average}</button>
        </div>

    );
}


export default TvBlock