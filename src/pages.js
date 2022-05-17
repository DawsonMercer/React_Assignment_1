import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[<strong>HOME</strong>- Company Website]</h1>
            <nav>
                <Link to="reviews" movielist= { movielist } >Reviews</Link>
                <Link to="form">Form</Link>
                
            </nav>
        </div>
    );
}

const movielist = [["movie1", "1/1/2022", "Bob"],
["movie2", "2/2/2022", "Abby"]];
// const movielist = "Bob";

// movieList.map((movieInfo)=> console.log(movieInfo));

export function Reviews(props){
    console.log(movielist);
    return(
        <div>
            <h1>[Reviews]</h1>
            <nav>
                <Link to="/">Home</Link><br></br>
                <Link to="/form">Form</Link>
            </nav>
            <hr/>
            <div>
                {movielist.map((movieInfo) =>(
                    <h3>Name: {movieInfo[0]}</h3>
                    // ,<h4>Date: {movieInfo[1]}</h4>,
                    // <h3>Actors: {movieInfo[2]}</h3>
                ))}
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