import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[<strong>HOME</strong>- Company Website]</h1>
            <nav>
                <Link to="reviews" >Reviews</Link><br/>
                <Link to="form">Form</Link>
                
            </nav>
        </div>
    );
}

// const movielist = [["movie1", "1/1/2022", "Bob"],
// ["movie2", "2/2/2022", "Abby"]];
// const movielist = "Bob";


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

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [actors, setActors] = useState("");
    const [poster, setPoster] = useState("placeholder");
    const [rating, setRating] = useState("5");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newMovie = {name, date, actors, poster, rating}
        console.log(newMovie);
        // https://www.youtube.com/watch?v=EcRFYF4B3IQ
        //TODO: check to see if placeholder or image selected. otherwise add file upload

    }

    return(
        <div>
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/reviews">Reviews</Link>
            </nav>
            <hr/>
            <h2>Fill out a form!</h2>
            <form onSubmit={handleSubmit}>
                <label>Movie Name: </label>
                <input type="text" required value={name} onChange={(e)=> setName(e.target.value)}/><br/>

                <label>Release Date: </label>
                <input type="text" required value={date} onChange={(e)=> setDate(e.target.value)}/><br/>

                <label>Actors: </label>
                <input type="text" required value={actors} onChange={(e)=> setActors(e.target.value)}/><br/>

                <label>Movie poster: </label>
                <select required value={poster} onChange={(e)=> setPoster(e.target.value)}>
                    <option value="placeholder">Placeholder</option>
                    <option value="upload">Upload a Poster</option>
                </select><br/>
                <label>Movie poster: </label>
                <input type="file" disabled></input>

                <label>Rating: </label>
                <select required value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select><br/><br/>

                <button>Add Movie</button>
            </form>
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