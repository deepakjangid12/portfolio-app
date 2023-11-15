


import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useTheme } from './context/ThemeContext';
import MoblieNav from './components/MobileNav/MoblieNav';
import ScrollToTop from "react-scroll-to-top";
import AdminPage from './pages/Admin/AdminPage';
import About from './pages/About/About';
import Teachstack from './pages/Techstack/Teachstack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Educations/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import Slide from 'react-reveal/Slide';

function App() {
  const [theme] =useTheme()
  const [showAllComponents, setShowAllComponents] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowAllComponents(!showAllComponents);

    // Use navigate to redirect to the desired page
    if (!showAllComponents) {
      navigate('/');
    }
  };

  return (
    <>
      <MoblieNav />
      <div id={theme}>
        <Layout />
        <Routes>
          <Route
            path="/"
            element={
              showAllComponents ? (
                <>
                  <div className="container">
                    
                    <About />
                    <Education />
                    <Teachstack />
                    <Projects />
                    <WorkExp />
                    <Contact />
                  </div>
                  <div className="footer pb-3 ms-3">
                    <Slide bottom>
                      <h4 className="text-center">Made By Deepak 👻 &copy; 2023</h4>
                    </Slide>
                  </div>
                  <ScrollToTop
                    smooth
                    color="#f29f67"
                    style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
                  />
                </>
              ) : (
                <Navigate to="/AdminPage" />
              )
            }
          />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </div>
      {!showAllComponents && (
        <button onClick={handleToggle}>
          Go Back
        </button>
      )}
    </>
  );
}

export default App;
