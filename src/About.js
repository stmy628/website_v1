import React, { useEffect, useState,useRef } from 'react';
import './App.css';
import './MusicBio.css';
import './About.css';

function About() {
  return (
    <div>
      <div>
        <h2> The longer version :D </h2>
      </div>
      <div>
        <img src ="/photo_2023-07-26_08-23-56.jpg" className = "small"/>
        <p> Samuel is currently studying Electrical and Electronic Engineering with Imperial College London and concurrently a music student at the Royal College of Music. 
          He is currently completing a UROP on ISSIE, a teaching tool used by Imperial College London, and is currently also an intern at the Land Transport Authority of Singapore.
        </p>
      </div>

      <div>
      <img src ="/photo_2023-07-26_04-22-00.jpg" className = "small"/>
        <p>
          
          He is interested in transport issues - not just engineering, but in terms of how transport affects social equity.
          His research on antennas and radar have won several prizes at SSEF, IRC-SET amongst others, and his work has been presented at the CST-ASEAN User Conference.
        </p>
      </div>
      <div>
      <img src ="/photo_2023-07-26_08-23-57.jpg" className = "small"/>
        <p>
          Samuel is a strong believer in community service. He volunteers actively in his neighbourhood and past projects involve
          Project Saga, a heritage amazing race partnering with the Chinese Development and Assistance Council, Code in the Community, a programme 
          supported by Saturday Kids Pte Ltd and Google and Sparked, a mentorship programme connecting tertiary students to experts 
          in their fields. He is also a published poet, with works published by Math Paper Press and enjoys running in his free time.
        </p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About;


