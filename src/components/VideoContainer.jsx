import VideoCard from "./VideoCard";
import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/constant'

const VideoContainer = () => {
    const [video, setVideo] = useState([]);

        useEffect(()=>{
            getVideos();
        },[])

        const getVideos = async () => {
            const data = await fetch(YOUTUBE_API_URL);
            const json = await data.json();
            setVideo(json.items);
            // console.log(json);
        }
// console.log(video);
// items[0].snippet.title
// [0].snippet.title
    // items[0].snippet.title
    return (
        <div>
            <VideoCard info={video[0]} />
        </div>
    )
}

export default VideoContainer;