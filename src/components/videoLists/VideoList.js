import React from 'react'
import styled from 'styled-components';
import VideoItem from './videoItem/VideoItem';

const VideoContainer = styled.div`
  border-bottom: 1px solid gray;
 `
// width: 35%;
// padding: 5px 10px;
// box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

const videoList  = ({VideoList, selectVideo}) => {
    
    const videoItems = VideoList.length > 0 ? (VideoList.map((item)=>{
       return <VideoItem selectedItem={selectVideo} key={item.id.videoId} item={item}/>
    }))
    : null 

  return(
    <VideoContainer>
         {videoItems}
    </VideoContainer>
   )

 }

 export default videoList;