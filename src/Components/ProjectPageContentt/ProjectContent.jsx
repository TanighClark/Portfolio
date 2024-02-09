import React, { Component } from 'react'
import './ProjectContent.css'
import ReactPlayer from 'react-player'
import video from '../Assets/e-commerce.mp4'
import Air from '../Assets/premiumAir.mp4'
import AI from '../Assets/AI-Wizardry.mp4'



const ProjectContent = () => {
  return (


    <div className='projectContents'>
      <h2>My Work</h2>


      <div className='videobox'>
        <video className='video' src={Air} width='600px' height='auto' controls />
        <div className="content">
          <p>
            Premium Air website is a satirical and humorous take on a fictional company that sells "cosmically sourced"
            air for vehicle tires. The site blends imaginative storytelling with playful design elements to engage visitors
            in the elaborate joke of purchasing premium, bottled air for their cars, supposedly harvested from the edge of the
            universe or other celestial locations.
          </p>
          <button><a href="https://premium-air.vercel.app/" target="_blank" rel="noopener noreferrer">Project Site</a></button>
        </div>
      </div>
      <div className='videobox'>
        <video className='video' src={AI} width='600px' height='auto' controls />
        <div className="content">
          <p>
            AI Wizardry is a pioneering online platform that empowers users to create their own personalized
            children's books with the aid of advanced artificial intelligence technologies. At its core, AI
            Wizardry merges the realms of creativity and technology, offering an array of tools that cater to storytellers,
            educators, and children alike. The site features an intuitive, user-friendly interface built on React, enabling
            seamless navigation and interaction.
          </p>
          <button><a href="https://ai-wizardry.vercel.app/" target="_blank" rel="noopener noreferrer">Project Site</a></button>
        </div>
      </div>
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
          <button><a href="https://3sumjx5jr3.us-east-1.awsapprunner.com/" target="_blank" rel="noopener noreferrer">Project Site</a></button>
        </div>
      </div>

    </div>



  )
}

export default ProjectContent;