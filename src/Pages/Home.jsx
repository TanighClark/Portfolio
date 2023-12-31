import React from 'react'
import Hero from '../Components/Hero/Hero'
import ProjectGrid from '../Components/Project Grid/ProjectGrid'
import Skills from '../Components/Skills/Skills'
import Contact from '../Components/ContactForm/Contact'
import Footer from '../Components/Layout/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <ProjectGrid/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home