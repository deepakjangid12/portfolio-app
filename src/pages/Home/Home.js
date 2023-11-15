import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './home.css';
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/newResume.pdf'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

function Home() {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState ==="light" ? "dark" : "light"));
  }
  return (
    <>
      <div className="home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsFillMoonFill size={30} />) : (<BsFillSunFill  size={30}/>)}
        </div>
        <div className="container home-content">

          <h1>Hi I'm Deepak</h1>
          <h2>
            <Typewriter
              options={{
                strings: ['FullStack Developer', 'MERN Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <Fade bottom> 
          <div className="home-buttons">
            <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8178078186' rel='noreferrer' target='blank'>Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="deepak.pdf">My Resume</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
