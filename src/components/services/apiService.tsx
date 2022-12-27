import axios from 'axios';
const KEY = process.env.MOVIE_DB_KEY;

const base_url = `https://api.themoviedb.org/3/`;
const movie_search_base_url = `${base_url}search/movie?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&query=`;
const series_search_base_url = `${base_url}search/tv?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&query=`;

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const searchMovies = async (searchTerm: any) =>{
    try{
        const res = await axios.get(
            searchTerm ? `${movie_search_base_url}${searchTerm}&page=1`
                : `https://api.themoviedb.org/3/movie/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=1`);
        return res.data;
    }catch (err){
        console.log(err);
    }
}
export const searchSeries = async (searchTerm: any) =>{
    try{
        const res = await axios.get(
            searchTerm ? `${series_search_base_url}${searchTerm}&page=1`
                : `https://api.themoviedb.org/3/tv/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=1`);
        return res.data;
    }catch (err){
        console.log(err);
    }
}

export const getMovies = async () => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=1`, { headers });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};


export const getSeries =  async () => {
    try {
        const ses = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=1`, {headers})
        return ses.data;
    }catch (err) {
        console.log(err);
    }
};

export const getMovie = async (id: any) => {
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&external_source=imdb_id`);
        return res.data;

    }catch (err){
        console.log(err);
    }
}
export const getShow = async (id: any) => {
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&external_source=imdb_id`);
        return res.data;

    }catch (err){
        console.log(err);
    }
}

