import React from 'react';
import {Link} from 'react-router-dom';

function Music() {
  return (
    <div>
      <h2> Music</h2>
      <p> Samuel is currently a student at the Royal College of Music studying Viola with Bryony Gibson-Cornish under an Ash Scholarship.</p>
      <p> You can find his biography <Link to = "/Music/Bio"> here</Link> and his <Link to ="/Music/Performances"> performances</Link>.</p>
    </div>
  );
}

export default Music;


