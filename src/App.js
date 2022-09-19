import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import PostalLookup from './pages/postallookup/PostalLookup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route exact={true} path="/plu" element={<PostalLookup/>} /> 
      </Routes>
    </div>
  );
}

export default App;
