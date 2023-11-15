// import React from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import './MoblieNav.css'
// import { ImHome } from 'react-icons/im';
// import { FcAbout } from 'react-icons/fc';
// import { BsPersonWorkspace } from 'react-icons/bs';
// import { GiSkills } from 'react-icons/gi';
// import { LiaGraduationCapSolid } from 'react-icons/lia';
// import Fade from 'react-reveal/Fade';
// import { GoProjectRoadmap } from 'react-icons/go';
// import { AiOutlineContacts } from 'react-icons/ai';
// import {FcSelfie} from "react-icons/fc";

// import {HiMenuAlt1} from 'react-icons/hi';



// // import { Link } from 'react-scroll';
// import { useState } from 'react';

// import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// // import Zoom from 'react-reveal/Zoom';
// // import Fade from 'react-reveal/Fade';
// function MoblieNav() {
//   const [open, setOpen] = useState(false)
//   const[logout,selogOut] =useState(false)
//   //handle open
//   const handleOpen = () => {
//     setOpen(!open);
//   };
//   //handle menu auto close
//   const handleMenuClicks = () => {
//     setOpen(false)
//   }
//   return (
//     <>
//       <div className="mobile-nav">
//         <div className="mobile-nav-header">
//           {open ? (<HiMenuAlt1 size={30} className='mobile-nav-icon' onClick={handleOpen} />
//           ) : (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
//           <span className='mobile-nav-title'>My Portfolio App</span>
//         </div>
        
//         {open && (
//           <Fade left>
//           <div className="mobile-nav-menu">
//             <div className="nav-items">
//             <Fade left>
//               <div className="nav-item">
//                 <div className="nav-link">
//                   <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <ImHome />
//                     Home
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <FcAbout />
//                     About
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <LiaGraduationCapSolid />
//                     Education
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>

//                     <GiSkills />
//                     Tech Stack
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <GoProjectRoadmap />
//                     Projects
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="workexp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <BsPersonWorkspace />
//                     Work Experience
//                   </ScrollLink>
//                 </div>

//                 <div className="nav-link">
//                   <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                     <AiOutlineContacts />
//                     Contact
//                   </ScrollLink>
//                 </div>
//                 <div className="nav-link ">
//                 <RouterLink to="/AdminPage" className="admin-lin" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                   <FcSelfie/>
//                   Admin Login
//                 </RouterLink>
//               </div>
//               </div>

//             </Fade>
//             </div>

//           </div>
//         </Fade>


//         )}

//       </div>
      
//     </>
//   )
// }

// export default MoblieNav








// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import './MoblieNav.css';
// import { ImHome } from 'react-icons/im';
// import { FcAbout } from 'react-icons/fc';
// import { BsPersonWorkspace } from 'react-icons/bs';
// import { GiSkills } from 'react-icons/gi';
// import { LiaGraduationCapSolid } from 'react-icons/lia';
// import Fade from 'react-reveal/Fade';
// import { GoProjectRoadmap } from 'react-icons/go';
// import { AiOutlineContacts } from 'react-icons/ai';
// import { FcSelfie } from 'react-icons/fc';
// import { HiMenuAlt1 } from 'react-icons/hi';
// import { useLocation } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// function MoblieNav() {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const isOnAdminPage = location.pathname === '/AdminPage';

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleMenuClicks = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className="mobile-nav">
//         <div className="mobile-nav-header">
//           {open ? (
//             <HiMenuAlt1 size={30} className='mobile-nav-icon' onClick={handleOpen} />
//           ) : (
//             <GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />
//           )}
//           <span className='mobile-nav-title'>My Portfolio App</span>
//         </div>

//         {open && (
//           <Fade left>
//             <div className={`mobile-nav-menu ${isOnAdminPage ? 'hidden' : ''}`}>
//               <div className="nav-items">
//                 <Fade left>
//                   <div className="nav-item">
//                     <div className="nav-link">
//                       <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <ImHome />
//                         Home
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <FcAbout />
//                         About
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <LiaGraduationCapSolid />
//                         Education
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <GiSkills />
//                         Tech Stack
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <GoProjectRoadmap />
//                         Projects
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="workexp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <BsPersonWorkspace />
//                         Work Experience
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
//                         <AiOutlineContacts />
//                         Contact
//                       </ScrollLink>
//                     </div>

//                     <div className="nav-link">
//                       <RouterLink
//                         to="/AdminPage"
//                         className={`admin-lin ${isOnAdminPage ? 'hidden' : ''}`}
//                         spy={true}
//                         smooth={true}
//                         offset={-100}
//                         duration={100}
//                         onClick={handleMenuClicks}
//                       >
//                         <FcSelfie/>
//                         Admin Login
//                       </RouterLink>
//                     </div>
//                   </div>
//                 </Fade>
//               </div>
//             </div>
//           </Fade>
//         )}
//       </div>
//     </>
//   );
// }

// export default MoblieNav;






import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MoblieNav.css';
import { ImHome } from 'react-icons/im';
import { FcAbout } from 'react-icons/fc';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { LiaGraduationCapSolid } from 'react-icons/lia';
import Fade from 'react-reveal/Fade';
import { GoProjectRoadmap } from 'react-icons/go';
import { AiOutlineContacts } from 'react-icons/ai';
import { FcSelfie } from 'react-icons/fc';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';


import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function MoblieNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnAdminPage = location.pathname === '/AdminPage';

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClicks = () => {
    setOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      <div className={`mobile-nav ${isOnAdminPage ? 'admin-page' : ''}`}>
        <div className="mobile-nav-header">
          {isOnAdminPage ? (
            <button className="go-back-button" onClick={handleGoBack}>
              <IoIosArrowBack  size={25} className='mobile-nav-icon'/>
            </button>
          ) : (
            <>
              {open ? (
                <HiMenuAlt1 size={30} className='mobile-nav-icon' onClick={handleOpen} />
              ) : (
                <GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />
              )}
            </>
          )}
          
          <span  className='mobile-nav-title' >My Portfolio App</span>
        </div>

        {open && (
          <Fade left>
            <div className={`mobile-nav-menu ${isOnAdminPage ? 'hidden' : ''}`}>
              <div className="nav-items">
                <Fade left>
                  <div className="nav-item">
                    <div className="nav-link">
                      <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                        <ImHome />
                        Home
                      </ScrollLink>
                    </div>



                    <div className="nav-link">
                    <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <FcAbout />
                         About
                       </ScrollLink>
                     </div>

                     <div className="nav-link">
                       <ScrollLink to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <LiaGraduationCapSolid />
                         Education
                       </ScrollLink>
                     </div>

                     <div className="nav-link">
                       <ScrollLink to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <GiSkills />
                         Tech Stack
                       </ScrollLink>
                     </div>

                  <div className="nav-link">
                      <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <GoProjectRoadmap />
                         Projects
                       </ScrollLink>
                     </div>

                     <div className="nav-link">
                       <ScrollLink to="workexp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <BsPersonWorkspace />
                         Work Experience
                       </ScrollLink>
                     </div>

                     <div className="nav-link">
                       <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClicks}>
                         <AiOutlineContacts />
                         Contact
                       </ScrollLink>
                     </div>




                    {/* ... (other menu items) ... */}





                    <div className="nav-link">
                      <RouterLink
                        to="/AdminPage"
                        className={`admin-lin ${isOnAdminPage ? 'hidden' : ''}`}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                        onClick={handleMenuClicks}
                      >
                        <FcSelfie />
                        Admin Login
                      </RouterLink>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </>
  );
}

export default MoblieNav;
