import React, { Component } from 'react'
import './ProjectContent.css'
import ReactPlayer from 'react-player'
import video from '../Assets/e-commerce.mp4'




const ProjectContent = () => {
  return (


    <div className='projectContents'>
      <h2>My Work</h2>

      <div className='videobox'>
        <video className='video' src={video} width='600px' height='auto' controls />
        <div className="content">
          <p>
            The mock Netflix website is intricately designed mock Netflix account, demonstrating my prowess in front-end development and UI/UX design.
            This simulated Netflix account mirrors the sleek interface and functionality of the renowned streaming platform. Crafted with HTML, CSS, and
            JavaScript, it showcases my ability to replicate and innovate upon complex user interfaces. The mock account features a user-friendly login
            system, reminiscent of Netflix's secure authentication process. Within the account, I've meticulously replicated the browsing experience,
            allowing users to explore a curated selection of 'movies' and 'TV shows,' showcasing my attention to detail in mimicking real-world functionalities.
          </p>
          <button><a href="link_to_project" target="_blank" rel="noopener noreferrer">Project Details</a></button>
        </div>
      </div>
    </div>



  )
}

export default ProjectContent;