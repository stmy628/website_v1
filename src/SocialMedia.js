import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      {/* Replace these links with your own social media URLs */}
      <a href="https://www.github.com/stmy628" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/samueltanmy" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialMedia;


