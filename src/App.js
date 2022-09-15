import React from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Home } from './components/pages/Home';
// import {Universities} from './components/pages/Universities';



function App() {
  return (
    <>
      <Router>
      <NavBar />

      <div className='pages'>
      <Routes>
        {/* <Route exact path="/" element={<Home/>} />
        <Route path="/universities" element={<Universities />}/> */}
          
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
