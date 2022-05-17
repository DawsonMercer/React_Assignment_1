import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Reviews, Form, Whoops404 } from "./pages";


function App() {
  return (
    <div className="App">
      <h1>Dawson's Movie App</h1>
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
