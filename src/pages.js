import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[<strong>HOME</strong>- Company Website]</h1>
            <nav>
                <Link to="reviews" >Reviews</Link>
                <Link to="form">Form</Link>
                
            </nav>
        </div>
    );
}

// const movielist = [["movie1", "1/1/2022", "Bob"],
// ["movie2", "2/2/2022", "Abby"]];
// const movielist = "Bob";

export function movieListFunction({movies = [], onChangeMovies = f=>f}){
    return(
        <h2>Movie Display</h2>


    );
}



// movieList.map((movieInfo)=> console.log(movieInfo));

export function Reviews({movies = [], onRemove = (f) =>f , onChangeMovies = f=>f}){
    // console.log(movielist);
    if (movies == null || movies == undefined) return <h1>Movies loading...</h1>
    return(
        <div>
            <h1>[Reviews]</h1>
            <nav>
                <Link to="/">Home</Link><br></br>
                <Link to="/form">Form</Link>
            </nav>
            <hr/>
            <div>
                {movies.map((movie, i)=>{
                    console.log(movie);
                    console.log(movie.name);
                    return <>
                        <img src={movie.poster} width={300} height={400}/>
                        <h3>Name: {movie.name}</h3>
                        <h3>Release date: {movie.date}</h3>
                        <h4>Actors:
                            {movie.actors.map((actor)=>{
                                return <>
                                <li>{actor}</li>
                                </>
                            })}
                        </h4>
                        <h4>Rating: {movie.rating} stars</h4>
                        <button onClick={()=>onRemove(movie.name)}>DELETE</button>
                        <br></br>
                        <br></br>
                    </>
                    
                })}
                {/* {movielist.map((movieInfo) =>(
                    <h3>Name: {movieInfo[0]}</h3>
                    // ,<h4>Date: {movieInfo[1]}</h4>,
                    // <h3>Actors: {movieInfo[2]}</h3>
                ))} */}
            </div>
        
            
        </div>
    );
}

export function Form(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
            </nav>
            <h2>Fill out a form!</h2>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}