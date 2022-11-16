import React, { useState } from 'react'
import './Home.css'
import Video from './Video'
import VideoData from './Videos.json'

const Home = () => {

  const categoryData = ["All", "Gaming",  "Music","Javascript", "Mixes", "Lives", "Programming", "Lofi Songs"]

  const [category, setCategory] = useState("All")
  const {videos} = VideoData
  const [onDisplay, setonDisplay] = useState(videos)

  const handleCategory = (tag)=>{
    setCategory(tag)
    if (tag === "All") {
      setonDisplay(videos)
      return
    }
    setonDisplay(videos.filter((video)=> video.category === tag))
  }
  

  return (
    <>
      <div className="homeContainer" id='homeContainer'>
        <div className="categoryContainer">
          {categoryData.map((tab) => {
            return <h3 className={`categoryTab ${category === tab && 'active'}`} key={tab} onClick={() => handleCategory(tab)}>{tab}</h3>
          })}
        </div>
       
        <div className="videoContainer">
          {onDisplay.map((video)=>{
            return <Video video={video} key={video.image}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Home