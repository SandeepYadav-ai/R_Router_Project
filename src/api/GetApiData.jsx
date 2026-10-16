//const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const getApiData = async function() {
    try {
        const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        
    };
};