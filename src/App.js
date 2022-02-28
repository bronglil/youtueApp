import React, { Component } from "react";
import SearchBar from "./components/Searchbar/Searchbar";
import youtube from "./api/youtube";
import VideoList from "./components/videoLists/VideoList";
import "./App.css";
import VideoDetail from "./components/videodetail/videodetail";

class App extends Component{
  state={
    videoList: [],
    selectVideo: null
  }

  componentDidMount(){
    this.onFormSubmit('children');
  }
  
  onFormSubmit = async (data) =>{
    const res = await youtube.get('/search', {
      params: {
        q: data
      } 
    });
    if(res.status === 200){
      this.setState({
        videoList: res.data.items,
        selectVideo: res.data.items[0]
      })
    }

  };

  onSelectedItem = (video) =>{
    this.setState({selectVideo: video})
  }
  render(){
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        <div style={{display: 'grid', gridTemplateColumns: '800px 1fr', padding: '1rem 5rem'}}>
        <VideoDetail video={this.state.selectVideo}/>
        <VideoList selectVideo={this.onSelectedItem} VideoList={this.state.videoList}/> 
        </div>
        </div>
    );
  }
}

export default App;
