import React from "react";
import './Hero.css'
import profile_img from '../../assets/Profile_shubh_img.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="shubh_img">
        <img src={profile_img} alt="" />
      </div >
      <h1><span> Hey there!</span>
        I’m Shubham.
      </h1>
      <p> a frontend developer with a keen eye for design and detail. I love creating responsive and dynamic websites that combine functionality with creativity. My goal is to build digital experiences that are fast, accessible, and visually appealing.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink> </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}
export default Hero