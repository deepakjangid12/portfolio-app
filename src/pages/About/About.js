import React from 'react'
import './About.css'
function About() {
  return (
    <>
      <div className="about " id='about'>
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/485/526/original/it-developer-coding-on-laptop-line-2d-animation-software-engineering-remote-employee-4k-motion-graphic-coder-programmer-developer-linear-animated-cartoon-flat-concept-white-background-video.jpg" alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hi, I'm Deepak Jangid, a recent B.Tech graduate and a passionate MERN stack enthusiast. I love turning creative ideas into awesome digital stuff, whether it's making websites look cool on the frontend or ensuring smooth operations behind the scenes on the backend.
              I'm not just about the tech—I'm a great team player who loves solving problems creatively. My positive attitude and eagerness to learn make me not just a tech geek but a reliable collaborator. Let's team up and turn your web ideas into something awesome!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
