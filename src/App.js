import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Reviews, Form, Whoops404, Navigation } from "./pages";
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [movies, setMovies ] = useState(null);

  useEffect( ()=>{
    //load JSON data
    fetch("./movies.json")
    .then(response => response.json())
    .then(setMovies)
    .then(console.log(movies))
    .catch(e=> console.log(e.message));
  },[])
  // NEED TO USE USE STATE THUS USE USE STATE HOOK BECAUSE WE WANT TO REFRESH
  if(!movies) return null;

  if (movies){
    return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reviews' element={<Reviews movies={movies} setMovies={setMovies} 
          onRemove = {(name) =>{
            const updatedMovieList = movies.filter((movie)=> movie.name !== name);
            setMovies(updatedMovieList);
          }}
          />}/>
          <Route path='/form' element={<Form 
          addMovie = {(newMovie) =>{
            console.log(`theres a new movie being added...${newMovie.name}`)
            setMovies([...movies, newMovie])
          }}/>}/>
          <Route path='*' element={<Whoops404 />}/>
        </Routes>

      </div>
    );
  }
}

export default App;
