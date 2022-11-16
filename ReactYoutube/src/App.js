import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

 function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        {/* <Route path='/video/:videoId'>
            <div className="app__mainpage">
              <VideoPlayer />
            </div>
          </Route> */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
