import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className='hero-full'>
    <div className='hero-container'>
      <div className='hero-text'>
        <p>" People start to heal the minute they feel heard. "</p>
        <h3>-  Cheryl Richardson</h3>
        </div>
        <div className='hero-btns'>
       <Button className='btns' buttonStyle="vertical-align:middle"><span>Get Started</span>
       </Button>
    </div>
    </div>
      <img src='/images/home.jpg' home />
      </div>
  );
}

export default HeroSection;