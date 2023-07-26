import React, {useState, useEffect, useRef} from 'react';
import SocialMedia from './SocialMedia';
import './App.css';
const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const interval = 180; 
  const textToSpellRef = useRef('Samuel Tan');
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const textToSpell = textToSpellRef.current;
      const currentIndex = currentIndexRef.current;

      if (currentIndex < textToSpell.length) {
        setDisplayText((prevText) => prevText + textToSpell[currentIndex]);
        currentIndexRef.current = currentIndex + 1;
      } else {
        clearInterval(animationInterval);
      }
    }, interval);

    return () => {
      clearInterval(animationInterval); // Clear the interval when the component unmounts
    };
  }, [interval]);
  return (
    <div>
      <div>
        <img src ="/photo_2023-07-21_07-37-42.jpg" alt = "Me" className = "small"/>
      </div>
      <div className = "header">
        <h2>{displayText}</h2>
      </div>
      <div>
        <ul>
          <li>
            Musician.
          </li>
          <li>
            Engineer.
          </li>
          <li>
            Volunteer.
          </li>
        </ul>
      </div>
      <SocialMedia/>
    </div>
  );
}

export default Home;


