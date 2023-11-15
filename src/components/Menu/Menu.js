
// import React from 'react'
// import './Menu.css'
// import { ImHome } from 'react-icons/im';
// import { FcAbout } from 'react-icons/fc';
// import { BsPersonWorkspace } from 'react-icons/bs';
// import { GiSkills } from 'react-icons/gi';
// import { LiaGraduationCapSolid } from 'react-icons/lia';
// import { GoProjectRoadmap } from 'react-icons/go';
// import { AiOutlineContacts } from 'react-icons/ai';
// import {FcSelfie} from "react-icons/fc";
// // import { Link } from "react-router-dom";
// // import { Link } from 'react-scroll';

// import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';





// function Menu({ toggle }) {
//   return (
//     <>
//       {toggle ? (
//         <>
//         <Zoom>
//           <div className="navbar-profile-pic">
//             <img src="https://cdn3.vectorstock.com/i/thumb-large/75/67/programmer-computer-expert-chalk-white-icon-vector-37237567.jpg" alt="profile image" />
//           </div>
//           </Zoom>
//           <Fade left>
//           <div className="nav-items">
//             <div className="nav-item">
//               <div className="nav-link">
//                 <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={100}>
//                   <ImHome />
//                   Home
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={100}>
//                   <FcAbout />
//                   About
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={100}>
//                   <LiaGraduationCapSolid />
//                   Education
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="techstack" spy={true} smooth={true} offset={-100} duration={100}>

//                   <GiSkills />
//                   Tech Stack
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={100}>
//                   <GoProjectRoadmap />
//                   Projects
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
//                   <BsPersonWorkspace />
//                   Work Experience
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={100}>
//                   <AiOutlineContacts />
//                   Contact
//                 </ScrollLink>
//               </div>
//               <div className="nav-link">
//                 <RouterLink to="/AdminPage" className="admin-link" spy={true} smooth={true} offset={-100} duration={100}>
//                   <FcSelfie/>
//                   Admin Login
//                 </RouterLink>
//               </div>
//             </div>
//           </div>
//           </Fade>
//         </>
//       ) : (
//         <>
//          <Fade left>
//           <div className="nav-items">
//             <div className="nav-item">
//               <div className="nav-link">
//                 <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={100}>
//                   <ImHome />
//                   Home
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={100}>
//                   <FcAbout />
//                   About
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={100}>
//                   <LiaGraduationCapSolid />
//                   Education
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="techstack" spy={true} smooth={true} offset={-100} duration={100}>

//                   <GiSkills />
//                   Tech Stack
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={100}>
//                   <GoProjectRoadmap />
//                   Projects
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
//                   <BsPersonWorkspace />
//                   Work Experience
//                 </ScrollLink>
//               </div>

//               <div className="nav-link">
//                 <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={100}>
//                   <AiOutlineContacts />
//                   Contact
//                 </ScrollLink>
//               </div>
//               <div className="nav-link">
//                 <RouterLink to="/AdminPage" className="admin-link" spy={true} smooth={true} offset={-100} duration={100}>
//                   <FcSelfie/>
//                   Admin Login
//                 </RouterLink>
//               </div>
//             </div>
//           </div>
//           </Fade>
// </>
//         )}
//     </>
//   )
// }

// export default Menu

import React from 'react';
import './Menu.css';
import { ImHome } from 'react-icons/im';
import { FcAbout } from 'react-icons/fc';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { LiaGraduationCapSolid } from 'react-icons/lia';
import { GoProjectRoadmap } from 'react-icons/go';
import { AiOutlineContacts } from 'react-icons/ai';
import { FcSelfie } from 'react-icons/fc';

import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Menu({ toggle }) {
  const location = useLocation();
  const isOnAdminPage = location.pathname === '/AdminPage';

  return (
    <>
      {toggle && !isOnAdminPage ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://res.cloudinary.com/dh4gjirh9/image/upload/v1699980595/IMG_20230310_202524_j2awsr.jpg"
                alt="profileimg"
              />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <ImHome />
                    Home
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <LiaGraduationCapSolid />
                    Education
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GiSkills />
                    Tech Stack
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GoProjectRoadmap />
                    Projects
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <BsPersonWorkspace />
                    Work Experience
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineContacts />
                    Contact
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <RouterLink
                    to="/AdminPage"
                    className="admin-link"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcSelfie />
                    Admin Login
                  </RouterLink>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : <>
      <Fade left>
      <div className="deepak">
      <h1 >Hello</h1>
      <h1 >Deepak</h1>
      <h1 >Welcome to</h1>
      <h1 >Admin Page</h1>
      </div>
      <div className="logout ">
      <RouterLink to="/"> <button className="logout-btn btn btn-primary mt-3">
          Go To Portfolio
          </button></RouterLink>
      </div>
      </Fade>
      </>}
    </>
  );
}

export default Menu;

