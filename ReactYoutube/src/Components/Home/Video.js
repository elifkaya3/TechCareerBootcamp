import React from 'react'
import './Video.css'

const Video = ({video}) => {

    

    const countViews = (number)=>{
        if (number.toString().length === 4) {
            return number.toString().slice(0,1)+'B'
        }
        if (number.toString().length === 5) {
            return number.toString().slice(0,2)+'B'
        }
        if (number.toString().length === 6) {
            return number.toString().slice(0,3)+'B'
        }
        if (number.toString().length === 7) {
            return number.toString().slice(0,1)+'M'
        }
        if (number.toString().length === 8) {
            return number.toString().slice(0,2)+'M'
        }
    }

  return (
    <>
        <div className="videoBox">
            <div className="thumbnailInfo">
                <img src={video.ImageUrl} alt="Thumbnail" className='videoThumbnail'/>
                <p>{video.Duration}</p>
            </div>
            <div className="videoInfo">
                <img src={video.Logo} alt="Channel Logo" className='video_channel'/>
                <div>
                    <h2>{video.Title.length <= 70? video.Title : `${video.Title.substr(0,70)}...`}</h2>
                    <h3 title={video.Channel}>{video.Channel} {video.IsVerified && <span className='material-symbols-rounded active'>check_circle</span>}</h3>
                    <p>{countViews(video.Viewss)} görüntüleme • {video.UploadTime} önce</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video