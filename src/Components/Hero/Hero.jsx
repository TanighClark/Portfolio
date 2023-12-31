import React from 'react';
import './Hero.css';
import hero from '../Assets/rightHero.png';
import { Link } from 'react-router-dom';
import '../CommonStyles/CommonStyles.css';

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className="hero-content">
        <div className="hero-text">
          <h2>Technology Enthusiast <span>| Problem Solver | </span><br /> Continuous Learner</h2>
          <p>Hello! I'm Ta'nigh Clark, a passionate student pursuing a Bachelor's 
            in Computer <br />Information Systems with a concentration in Software Programming.</p>
          <button><Link to='/Pages/Portfolio' >Explore My Portfolio</Link></button>
          <Link className="email" to='/Pages/Contact'>Tanighclark@gmail.com</Link>
        </div>
        <div className="hero-image">
        <img
            src={hero}
            srcSet={`${hero} 500w, ${hero} 1000w, ${hero} 1500w`}
            sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 1500px"
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;