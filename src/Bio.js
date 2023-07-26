import React from 'react';
import YouTube from 'react-youtube'; 
import './App.css';
import './MusicBio.css';


function Bio() {
  
  return (
  <div /*className = 'page-container MusicBio'*/>
    <div>
      <h2>Biography</h2>
      <img src = "/photo_2023-07-16_14-49-22.jpg" alt = "Performance" className = "small"/>
      <p>
        A recipient of the Ash Music Scholarship, he currently studies viola performance at the Royal College of Music with Bryony Gibson-Cornish, and counts Marietta Ku and Kong Zhao Hui among the teachers that he had the privilege to study under before. Having played the violin and viola from a young age, he was featured on Singapore television on the Chinese language versions of Good Morning Singapore and Tuesday Report, and has performed in his native Singapore, Perth (2010), Prague (2013) and Hong Kong (2016).
      </p>
      <p>
        Samuel greatly enjoys both chamber and orchestral music. He is a member of the University of London Symphony Orchestra, Imperial College Symphony Orchestra, Imperial Sinfonietta and the Orchestra of the Music Makers. He is the violist of the Estampes Quartet in Singapore, which has performed at the Esplanade and Arts House in Singapore. He has also played with other orchestras, including Musicians’ Initiative and the Nanyang Academy of Fine Arts Orchestra. He has played under the baton of Prof Chan Tze Law, Joshua Tan, Dr Lien Boon Hua, Edward Tan, Dr Tan Wee-Hsin, Yap Ling, Lin Juan, Lim Yau, Chin Chee Mee, Lim Yau, Marietta Ku, Gordon Siu and Toh Meng Wan. 
      </p>
    </div>
    
  </div>
  
  

  );
}

export default Bio;


