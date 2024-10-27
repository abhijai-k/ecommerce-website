import React from 'react';
import './Hero.css';
import heroImage from '../Assets/hero-image.jpg'; // Make sure to use your own image

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Your One-Stop Shop for Hardware</h2>
        <h1>Explore Our Wide Range of Tools and Materials</h1>
        <p>
          We have everything you need for home improvement. Shop now for the best deals!
        </p>
        <button className="explore-button">Explore Now</button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hardware display" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
