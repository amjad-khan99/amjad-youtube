
const VideoCard = ({info}) => {
console.log(info)
  return (
    <div>
        <h4>{info?.snippet?.title}</h4>
    </div>
  )
}

export default VideoCard