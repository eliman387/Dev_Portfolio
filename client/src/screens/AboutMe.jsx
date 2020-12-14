import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import aboutme from '../assets/about-me.jpg';

function AboutMe(props) {
  return (
    <div>
      <nav id='header'>
        <div id='nav-links'>
        <Link to='/about-me'>ABOUT ME</Link>
        <a href='/#projects-header'>PORTFOLIO</a>
        </div>
        <Link to='/'><img id='logo' src={logo} alt="logo" /></Link>
        <a href='#contact-me'id='connect-button'>LET'S CONNECT</a>
      </nav>
      <div id='about-me-container'>
        <img id='about-me-pic' src={aboutme} alt="about me" />
        <div id='brand-statement'>
          <p>An up and coming Junior Software Engineer with a background of two years in visual merchandising and design. My creative experience in the retail field has allowed me to look at certain problems through a different lens. With a strong desire to seek collaborative solutions and an eager work ethic, makes me an excellent team player within my new developer career.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;