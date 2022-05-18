import React, { useState, useRef } from "react";
import {Link, useLocation} from "react-router-dom";
import {Button, Container, Navbar, Nav} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './pages.css'

export function Home(){
    return(        
        <div>
            <h1>Welcome to my React Web App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna felis, egestas id accumsan ut, convallis ut sem. Aenean leo sapien, volutpat sit amet sapien sed, tristique lobortis ex. Nunc pulvinar erat ac tellus interdum malesuada. Ut at finibus enim, at eleifend sapien. Cras metus risus, cursus eget lorem at, vehicula pharetra tellus. Sed id nisi pretium nulla sollicitudin posuere. Proin a accumsan quam, eu ultricies risus. Sed lacinia ornare massa, et hendrerit tortor consequat vel. Sed efficitur suscipit blandit. Ut feugiat vitae eros cursus lacinia. Donec consectetur orci sed ex pulvinar semper. Etiam bibendum quis ligula blandit imperdiet. Sed et risus tempus, egestas erat commodo, commodo nulla. Duis nec est metus.</p>
            <p>Sed facilisis turpis in efficitur tempus. Suspendisse potenti. Vestibulum porta pretium enim, in laoreet odio posuere suscipit. Suspendisse et tempor eros. Vivamus libero mi, fermentum eget auctor ut, cursus vitae ante. Donec lacinia orci id sem auctor blandit. Sed condimentum ultrices viverra. Aenean nulla sapien, eleifend eu tortor in, ultricies aliquam sapien. Nam sit amet velit pharetra, faucibus sapien et, congue ligula. Donec ultrices justo vel dictum dictum. Pellentesque at sodales erat. Aliquam efficitur pharetra leo, ultrices molestie lectus fringilla feugiat.</p>
            
        </div>
    );
}

// const movielist = [["movie1", "1/1/2022", "Bob"],
// ["movie2", "2/2/2022", "Abby"]];
// const movielist = "Bob";


// movieList.map((movieInfo)=> console.log(movieInfo));

//TODO: add nav bar 
export function Navigation(){
    return(
        <>
        <nav>

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><h1>Dawson's React App</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link><br></br>&nbsp; 
                    <Link to="/form">Form</Link><br></br>&nbsp; 
                    <Link to="/reviews">Reviews</Link>
                </Nav>
                </Container>
        </Navbar>
  <hr/>
            {/* <Link to="/">Home</Link><br></br>
            <Link to="/form">Form</Link><br></br>
            <Link to="/reviews">Reviews</Link> */}
            <hr/>
    </nav>

        </>
    )
    
}

export function Reviews({movies = [], onRemove = (f) =>f , onChangeMovies = f=>f}){
    // console.log(movielist);
    if (movies == null || movies == undefined) return <h1>Movies loading...</h1>
    return(
        <div>
            {/* <nav>
                <Link to="/">Home</Link><br></br>
                <Link to="/form">Form</Link>
            </nav> */}
            <div>
            <h1>Movie Reviews</h1><br></br>
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
                        <img src="images/dots.png" width={50} height={15}></img>
                        <img src="images/dots.png" width={50} height={15}></img>
                        <br></br><br></br>
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

export function Form({addMovie = (f) =>f}){

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [actors, setActors] = useState([]);
    const [poster, setPoster] = useState("images/movie1.jpg");
    const [rating, setRating] = useState("5");
    const [isPending, setIsPending] = useState(false);

    const refName = useRef();
    const refDate = useRef();
    const refActors = useRef();
    const refRating = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setActors()

        if(document.getElementById("posterSelect").value === "placeholder"){
            setPoster("images/movie1.jpg")
            console.log(poster);
        }
        if(document.getElementById("posterSelect").value === "images/jaws.jpg"){
            setPoster("images/jaws.jpg")
            console.log(poster);
        }
        if(document.getElementById("posterSelect").value === "images/joker.jpg"){
            setPoster("images/joker.jpg")
            console.log(poster);
        }
        if(document.getElementById("posterSelect").value === "images/shrek.png"){
            setPoster("images/shrek.png")
            console.log(poster);
        }

        // }else{
        //     setPoster(document.getElementById("posterUpload").value)
        //     console.log(poster);
        // }
        const newMovie = {
            name: name, 
            date: date, actors:
            actors, 
            poster: poster, 
            rating: rating}
        setIsPending(true);
        console.log("new movie info below")
        console.log(newMovie);
        addMovie(newMovie)
        // https://www.youtube.com/watch?v=EcRFYF4B3IQ
        //TODO: check to see if placeholder or image selected. otherwise add file upload
        
        // fetch("./movies.json", {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(newMovie)
        // }).then(()=>{
        //     console.log("new Movie added")
        //     setIsPending(false);
        // })

    }
    const fileUpload = (e)=>{
        setPoster(e.target.value)
        let posterOption = document.getElementById("posterSelect");
        console.log(posterOption.value);
        console.log("hiiii")
        // if (posterOption.value == "upload"){
        //     document.getElementById("posterUpload").disabled = false;
        // }else{
        //     document.getElementById("posterUpload").disabled = true;
        //     document.getElementById("posterUpload").value = "";
        //     setPoster("images/movie1.jpg")

        // }
    }

    return(
        <>
        
        <div className="formDiv">
            {/* <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/reviews">Reviews</Link>
            </nav> */}
            <h2>Fill out a form!</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Movie Name:</label><br></br>
                <input type="text" ref={refName} required value={name} onChange={(e)=> setName(e.target.value)}/><br/>

                <label>Release Date: </label><br></br>
                <input type="text" required ref={refDate} value={date} onChange={(e)=> setDate(e.target.value)}/><br/>

                <label>Actors: </label><br></br>
                <input type="text" required ref={refActors} value={actors} onChange={(e)=> setActors(e.target.value.split(","))}/><br/>

                <label>Movie poster: </label><br></br>
                <select required value={poster} id="posterSelect" onChange={(e)=>fileUpload(e)}>
                    <option value="placeholder">Placeholder</option>
                    {/* <option value="upload">Upload a Poster</option> */}
                    <option value="images/jaws.jpg">Jaws</option>
                    <option value="images/joker.jpg">The Joker</option>
                    <option value="images/Shrek.png">Shrek</option>
                </select><br/>
                {/* <label>Movie poster: </label>
                <input type="file" id="posterUpload"disabled onChange={(e)=> setPoster(e.target.value)}></input><br></br> */}

                <label>Rating: </label><br></br>
                <select required ref={refRating} value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select><br/><br/>

                {!isPending && <button>Add Movie</button>}
                {isPending && <button disabled>Movie Added...</button>}
            </form>
        </div>
        </>
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