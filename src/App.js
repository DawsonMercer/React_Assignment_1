import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Reviews, Form, Whoops404 } from "./pages";


function App() {
  let movies = {};

  useEffect( ()=>{
    //load JSON data
    fetch("./movies.json")
    .then(response => response.json())
    .then(json =>console.log(json))
    .then(e=> console.log(e.message));
  },[])

  return (
    <div className="App">
      <h1>Dawson's React Movie Reviews App</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='*' element={<Whoops404 />}/>
      </Routes>

    </div>
  );
}

export default App;
