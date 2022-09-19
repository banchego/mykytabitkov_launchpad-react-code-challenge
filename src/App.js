import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import PostalLookup from './pages/postallookup/PostalLookup';
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Universities from './pages/universities/Universities';



function App() {
  return (
    
    <>
      <Router>
      <Navbar />

      <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/universities" element={<Universities />}/>
        <Route exact={true} path="/plu" element={<PostalLookup/>} />
          
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;