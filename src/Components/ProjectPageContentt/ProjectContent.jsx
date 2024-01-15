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
          I've successfully developed a responsive e-commerce site using a combination of JavaScript, HTML, CSS, and React JS. 
          This online store is designed to provide a seamless user experience. The website begins with an engaging Home page, 
          featuring trending products, captivating offer banners, and a convenient newsletter subscription form. From there, 
          users can explore dedicated pages for men's, women's, and kids' categories. Each category page showcases a curated 
          selection of products to enhance the shopping experience.
          </p>
          <button><a href="link_to_project" target="_blank" rel="noopener noreferrer">Project Details</a></button>
        </div>
      </div>
      
    </div>



  )
}

export default ProjectContent;