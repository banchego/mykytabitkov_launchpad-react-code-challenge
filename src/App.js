
import Navbar from './components/navbar/Navbar'
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Universities from './pages/universities/Universities';
import PostalLookup from './pages/postallookup/PostalLookup';



function App() {
  return (
        <>
      <Router>
      <Navbar />
      <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/universities" element={<Universities />}/>
        <Route path="/postal" element={<PostalLookup/>} />
          
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;