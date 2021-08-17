import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'




function App() {
  return (
    <Router>
      <div className="intro"><Navbar /></div>
    </Router>
  )
}

export default App;
