import React from 'react';
import {Link} from 'react-router-dom';

function Engineering() {
  return (
    <div>
      <h2> Engineering</h2>
      <p> Samuel is currently an Electrical and Electronic Engineering Student at Imperial College London.</p>
      <p> You can find the modules he is studying <Link to = "/Engineering/Modules"> here</Link> and his <Link to ="/Engineering/Blog"> blog</Link>.</p>
    </div>
  );
}

export default Engineering;


