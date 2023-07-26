import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import ChildComponent from './childcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Engineering from './Engineering';
import Modules from './Modules';
import Blog from './Blog';
import Music from './Music';
import Bio from './Bio';
import Performances from './Performances';
function App() {
  
  const [backgroundImage, setBackgroundImage] = useState(null);
  useEffect(() => {
    const path = window.location.pathname;
    if (path ==="/Music/Bio"){
      setBackgroundImage('C:\Users\Samuel\Downloads\PW\website\src\photo_2023-07-16_14-49-22.jpg');
    }
  },[]);
  return (
    <div className ="App">
      <div className = "navbar">
        
        <RouterST />
      </div>
    </div>
  )
  
  /*return (
    
    <div className="App">
      <RouterST />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <button onClick = {() => setCount (count + 1)}> Increment</button>
        <p>Count: {count}</p>
        <ChildComponent count = {count} ChildComponent />;
      </header>
      <ApiRet />
      <SamuelTitle />
      
    </div>
      
  );*/
}
function ApiRet (){
  const [data, setData] = useState([]);
  useEffect(()=>{ //mount
    fetchData();
    //unmount
    return() => {
      cleanup();
    };
  },[]);
  const fetchData = async() => {
    try{
      const response= await fetch('https://api.nationalize.io?name=nathaniel');
      const data = await response.json();
      setData(data);
    } catch (error){
      console.error('Error fetching data: ', error)
    }
  };
  const cleanup = () =>{
    
  }
  return <div>
    {data.country && data.country.map((item) => (
      <p key={item.country_id}>
        Country: {item.country_id}, Probability: {item.probability}
      </p>
    ))}
  </div>
}
function RouterST(){
  return <Router>
    <div className ="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Engineering"> Engineering
            </Link>
            <ul>
              <li>
                <Link to = "/Engineering/Modules"> Modules</Link>
              </li>
              <li>
                <Link to ="/Engineering/Blog"> Blog </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to = "/Music"> Music</Link>
            <ul>
              <li>
                <Link to = "/Music/Bio"> Bio</Link>
              </li>
              <li>
                <Link to = "/Music/Performances"> Performances</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Engineering" element={<Engineering />} />
        <Route path="/Engineering/Modules" element={<Modules />} />
        <Route path="/Engineering/Blog" element={<Blog />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Music/Bio" element={<Bio />} />
        <Route path="/Music/Performances" element={<Performances />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      
    </div>
  </Router>
}
export default App;
