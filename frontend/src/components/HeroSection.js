import React from 'react';
import '../App.js';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       <video src='/images/video-1.mp4' autoPlay loop muted /> 
      <h1>Online Medicine Store</h1>
      <p>Show your prescription get your medicine</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
