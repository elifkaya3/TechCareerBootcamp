import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import User from './Components/User/User'

function App() {
  return (
    <div>
      
      <Router>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <User/>
      </Router>
    </div>
  );
}

export default App;
