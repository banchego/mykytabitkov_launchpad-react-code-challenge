import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';



function App() {
  return (
    <>
      <Router>
      <Navbar />

      <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/universities" element={<Universities />}/> */}
          
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;