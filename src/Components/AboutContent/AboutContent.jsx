import React from 'react'
import './AboutContent.css'
import about from '../Assets/about.png'
import '../CommonStyles/CommonStyles.css';
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='aboutContent'>
        <div className='left'>
        <h1>&lt;About ME/&gt;</h1>
            <p>I hold an Associate's degree in Liberal Arts, another 
                in Information Technology & Networking, and a Programming 
                Essentials certificate. These qualifications equip me with 
                the skills and knowledge to pursue a career in Technology. 
                By 2025, I will have completed my Bachelor's degree in Computer 
                Information Systems, focusing on Software Programming.</p>
            <p>During my free time, I enjoy crafting websites. Along my learning path, 
                I discovered a passion for web development—I find myself completely 
                immersed, often losing track of time while designing and learning on 
                the go. There's something fulfilling about transforming a blank white 
                screen into a beautiful and organized interface.</p>
                <div className="button-container">
                <button><Link to='/Pages/Portfolio' >Portfolio</Link></button>
                <button> <a href="../Assets/resume.pdf" download className="but">Resume</a></button>
                </div>
        </div>
        <div className="right">
            <img src={about} alt="" />
            <h3>Ta'nigh Clark</h3>
            <h4>Computer Science Major</h4>
            <button type="submit" className=" mail"  >Email Me</button>
            <a href="https://www.linkedin.com/in/tanigh-clark" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/in/tanigh-clark" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>

        </div>

    </div>
  )
}

export default AboutContent