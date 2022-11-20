import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Video from './Video'
import './Home.css'

const Home = () => {

  const [videos, setVideos] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8585/api/Youtubes")
      .then((res) => res.data);
    setVideos(response);
  }
  useEffect(() => { 
    fetchData();
  }, [])
console.log(videos);
  return (
    <div className="videoContainer">
    {videos.map((video) =>
          <Video video={video} key={video.ID}/>
        )}
  </div>
    
  );
};


export default Home