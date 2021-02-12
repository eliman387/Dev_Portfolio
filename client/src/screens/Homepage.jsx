import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import profile from '../assets/website_photo.jpg';
import plantify from '../assets/Plantify.png';
import rt from '../assets/RecipeTracker.png';
import VC from '../assets/VC.png';
import stock from '../assets/stock2.jpg';
import icon1 from '../assets/html_icon1.svg';
import icon2 from '../assets/css_icon1.svg';
import icon3 from '../assets/node_icon.svg';
import icon4 from '../assets/React-icon.svg';
import icon5 from '../assets/ruby_icon.svg';
import icon6 from '../assets/rails_icon.svg';
import icon7 from '../assets/mongo_icon.svg';
import icon8 from '../assets/postgres_icon.svg';
import icon9 from '../assets/expressjs.svg';
import icon10 from '../assets/airtable-logo.svg';




function Homepage() {
  return (
    <div>
      <br />
      <br/>
      <nav id='header'>
        <div id='nav-links'>
        <Link className='links' to='/about-me'>ABOUT ME</Link>
        <a className='links' href='#projects-header'>PORTFOLIO</a>
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
      
      <br /> 
      <br />
      <div className='project-backdrop'> 
        <div className='container'>
          <div className='card'>
            <div className='content'>
              <h2>01</h2>
              <h3>Plantify</h3>
              <div className='img-techstack'>
                <img src={plantify} alt="plantify" width='50%' />
                <div className='card-techstack'>
                  <img id='react-card-icon'className='card-icon'src={icon4} alt="react" />
                  <img className='card-icon' src={icon5} alt="ruby" />
                  <img className='card-icon' src={icon6} alt="rails" />
                </div>
              </div>
              
              <p>This cool little app allows the user to find local plant shops in the local area and check their inventory.</p>
              <a href="https://plantify.netlify.app/" rel="noopener noreferrer" target="_blank">Check it Out!</a>
              <a href="https://github.com/eliman387/Plantify" rel="noopener noreferrer" target="_blank">Project Github</a>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2>02</h2>
              <h3>Virtual Collective</h3>
              <div className='img-techstack'>
                <img src={VC} alt="Virtual Collective" width='50%' />
                <div className='card-techstack'>
                  <img id='react-card-icon' className='card-icon'src={icon4} alt="react" />
                  <img id='express-logo' className='card-icon' src={icon9} alt="express" />
                  <img className='card-icon' src={icon7} alt="mongodb" />
                </div>
              </div>
              <p>This amazing callabrotive app allows the user to find local events in the local area and attend
                virtually. This app was designed and developed in tandem with my colleagues:
                Mika Nur, Chase Mock, Leslie, Ashley, and Jordie
              </p>
              <a href="https://virtualcollective.netlify.app/" rel="noopener noreferrer" target="_blank">Check it Out!</a>
              <a href="https://github.com/mikanur10/Virtual-Collective" rel="noopener noreferrer" target="_blank">Project Github</a>
            </div>
          </div>
          <div className='card'>
            <div className='content'>
              <h2>03</h2>
              <h3>Recipe Tracker</h3>
              <div className='img-techstack'>
                <img src={rt} alt="Recipe Tracker" width='50%' />
                <div className='card-techstack'>
                  <img id='react-card-icon'className='card-icon'src={icon4} alt="react" />
                  <img id='airtable-logo' className='card-icon' src={icon10} alt="airtable" />
                </div>
              </div>
              <p>This cool little app allows the user to view delicious recipes and create their own as well.</p>
              <a href="https://recipetracker.netlify.app/" rel="noopener noreferrer" target="_blank">Check it Out!</a>
              <a href="https://github.com/eliman387/Recipe-Tracker" rel="noopener noreferrer" target="_blank">Project Github</a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br/>  
      <div id='contact-me'>
        <h1>Contact Me</h1>
        <div id='email-container'>
        <form
          action="https://formspree.io/f/mbjpzqbg"
          method="POST"
          >
          <label>
            Your name:
            <input type="text" name="name" />
            </label>
            <br/>
          <label>
            Your email:
            <input type="text" name="_replyto"/>
            </label>
            <br/>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button id='form-submit' type="submit">Send</button>
        </form>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default Homepage;