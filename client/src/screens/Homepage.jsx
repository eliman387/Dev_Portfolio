import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import profile from '../assets/website_photo.jpg';
import plantify from '../assets/Plantify.png';
import rt from '../assets/RecipeTracker.png';
import VC from '../assets/VC.png';
import stock from '../assets/stock2.jpg';
import icon1 from '../assets/html_icon.svg';
import icon2 from '../assets/css_icon.svg';
import icon3 from '../assets/node_icon.svg';
import icon4 from '../assets/React-icon.svg';
import icon5 from '../assets/ruby_icon.svg';
import icon6 from '../assets/rails_icon.svg';
import icon7 from '../assets/mongo_icon.svg';
import icon8 from '../assets/postgres_icon.svg';


function Homepage() {
  return (
    <div>
      <nav id='header'>
        <div id='nav-links'>
        <Link to='/about-me'>ABOUT ME</Link>
        <a href='#projects-header'>PORTFOLIO</a>
        </div>
        <img id='logo' src={logo} alt="logo" />
        <a href='#contact-me'id='connect-button'>LET'S CONNECT</a>
      </nav>

      <img id='profile-pic' src={profile} alt="profile pic" />
      
      <div id='greeter'>
        <h1>Hi. <br/> I'm Elijah, <br/> a Software Engineer. <br/> And welcome to my page.</h1>
        <p>I am an up and coming full-stack Software Developer with a keen eye for design and detail.</p>
        <p>If you’re looking for a hard-working, creative, and determined team-player, I’d love to grow within your company.
          <br />
          <br />
          Check out my work below:
        </p>
      </div>
      <br/>
      <img id='stock-img' src={stock} alt="laptop-stock-img" />
      <div id='tech-stack'>
        <h2 id='wheelhouse'>MY WHEELHOUSE</h2>
        
        <div id='icon-grid'>
          <img id='html-icon' src={icon1} alt="html" />
          <img id='css-icon' src={icon2} alt="css"/>
          <img id='node-icon' src={icon3} alt="node.js"/>
          <img id='react-icon' src={icon4} alt="react" />
          <img id='ruby-icon' src={icon5} alt="ruby" />
          <img id='rails-icon' src={icon6} alt="rails" />
          <img id='mongo-icon' src={icon7} alt="mongo" />
          <img id='postgres-icon' src={icon8} alt="postgresql" />
        </div>

      </div>
      <h3 id='projects-header'> MY PROJECTS</h3>
      <div className='projects'>
        <div>
          <img id='plantify-ss' src={plantify} alt="screenshot" />
          <a className='project-link' href='https://plantify.netlify.com' rel="noopener noreferrer" target="_blank" ><h2>Plantify</h2></a>
          <p className='project-descrip'>This cool little app allows the user to find local plant shops in the local area and check their inventory.</p>
        </div>
      </div>
      <br />
      <div className='projects'>
        <div>
          <img id='plantify-ss' src={rt} alt="screenshot" />
          <a className='project-link' href='https://recipetracker.netlify.com' rel="noopener noreferrer" target="_blank" ><h2>Recipe Tracker</h2></a>
          <p className='project-descrip'>This cool little app allows the user to find local plant shops in the local area and check their inventory.</p>
        </div>
      </div>
      <br />
      <div className='projects'>
        <div>
          <img id='plantify-ss' src={VC} alt="screenshot" />
          <a className='project-link'href='https://virtualcollective.netlify.app' rel="noopener noreferrer" target="_blank" ><h2>Virtual Collective</h2></a>
          <p className='project-descrip'>This cool little app allows the user to find local plant shops in the local area and check their inventory.</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;