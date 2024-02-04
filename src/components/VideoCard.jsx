
const VideoCard = ({info}) => {
// console.log(info)
  return (
    <div className="p-4 pt-6 m-4 w-72     shadow-xl rounded-lg">
        <img 
        className="rounded-lg"
        src= {info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        <ul className="p-2">
          <li className="font-bold">{info?.snippet?.title}</li>
          <li className="font-semibold">{info?.statistics?.viewCount} veiws</li>
        </ul>
    </div>
  )
}

export default VideoCard