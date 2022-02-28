import React from 'react'



const VideoDetail = ({video}) => {
  if(!video){
    return <div style={{display:'grid', placeItems:'center'}}>...loading</div>
  }

  const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <div> 
      <div style={{height: "70vh", width: "100%"}}>
        <iframe title="video player" height="100%" width='100%' src={youtubeSrc}/>
      </div>
      <div style={{border: '1px solid gray'}}>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
      </div>
   </div>
   )

 }

 export  default VideoDetail;