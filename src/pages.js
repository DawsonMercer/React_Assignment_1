import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="reviews">Reviews</Link>
                <Link to="form">Form</Link>
                
            </nav>
        </div>
    );
}

export function Reviews(){
    return(
        <div>
            <h1>[Reviews]</h1>
            
        </div>
    );
}

export function Form(){
    return(
        <div>
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