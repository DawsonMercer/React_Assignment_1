import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Reviews, Form, Whoops404 } from "./pages";


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
        <h1>Dawson's React Movie Reviews App</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reviews' element={<Reviews movies={movies} setMovies={setMovies} 
          onRemove = {(name) =>{
            const updatedMovieList = movies.filter((movie)=> movie.name !== name);
            setMovies(updatedMovieList);
          }}
          />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='*' element={<Whoops404 />}/>
        </Routes>

      </div>
    );
  }
}

export default App;
