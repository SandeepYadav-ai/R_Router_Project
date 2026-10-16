import { useLoaderData } from "react-router"
import { Card } from "../components/UI/Card";

export const Movie = ()=> {
    const movieData = useLoaderData();
    console.log(movieData);
    
    return(
        <>
            <ul className="container grid grid-four--cols">
                {movieData && movieData.Search.map((curMovie)=>{
                    return <Card key={curMovie.imdbId} curMovie={curMovie} />
                })}
            </ul>
        </>
    );
};