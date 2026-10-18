//import { useParams } from "react-router";

//const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const getMovieDetails = async function({params}) {
    const id = params.movieID;
    console.log(id);
    
    try {
        const API = `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`;
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        
    };
};