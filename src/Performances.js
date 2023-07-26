import React from 'react';
import YouTube from 'react-youtube'; 
import './App.css';
import './MusicBio.css';

function Perf() {
  const videoId1 = 'TMGPBqJEGZY';
  const videoId2 = 'w_GOB7bAqTc';
  return (
    <div>
      <h2>Coming Soon - Do stay tuned for 2023/24 Schedule :D</h2>
      <div className = "video-container">
        <div className = "video-wrapper">
        
          <YouTube videoId = {videoId1}  />
        </div>
        <div className = "video-wrapper">
        
          <YouTube videoId = {videoId2}  />
        </div>
      </div>
    </div>
    
  );
}

export default Perf;


