import React from 'react'
import styled from 'styled-components';
import './videoitem.css'

const GridCont = styled.div`
    display:grid;
    grid-template-columns: repeat(2, minmax(150px, 1fr) );
    grid-template-rows: auto;
    grid-gap: 2rem;
    margin:10px 5px;
    cursor: pointer;
    place-items: center;
`
const Image = styled.img`
    height: 150px;
    width: 100%;
`

 const VideoItem = ({item, selectedItem}) => {
 return(
  <GridCont onClick={() =>selectedItem(item)}>
      <Image  src={item.snippet.thumbnails.medium.url} alt={item.snippet.channelTitle}/>
      <div>
      <h3>{item.snippet.channelTitle}</h3>
      </div>
  </GridCont>
   )

 }

 export default VideoItem;