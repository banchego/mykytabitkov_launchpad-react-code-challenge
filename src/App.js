import Navbar  from './components/navbar/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
