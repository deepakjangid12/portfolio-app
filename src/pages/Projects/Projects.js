import React from 'react'
import './Project.css'
import Zoom from 'react-reveal/Zoom';


function Projects() {
  return (
    <>
    <Zoom>
     <div className="project" id='projects'>
     <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top recent projects</h2>
                <hr />
                <p className='pb-3 text-center'>here are my top 3 recent projects with live links </p>
                {/* card design */}
                <div className="row" id='ads'>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src="https://res.cloudinary.com/dh4gjirh9/image/upload/v1699357728/Screenshot_2023-11-07_171737_yzvavm.png
                                " alt="project 1
                                " />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Html</span>
                                <span className="card-detail-badge">Css</span>
                                <span className="card-detail-badge">Bootstrap</span>
                                <span className="card-detail-badge">React</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">NEWS APP</h5>
                                </div>
                                <a href="https://localnews-sepia.vercel.app/" target='blank' className='ad-btn'>view</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src="https://res.cloudinary.com/dh4gjirh9/image/upload/v1699002220/Screenshot_2023-11-03_142955_g63bkz.png
                                " alt="project 1
                                " />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Mongodb</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">E-commerce</h5>
                                </div>
                                <a href="https://indiamart-frontend-ri5z.vercel.app/" target='blank' className='ad-btn'>view</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src="https://res.cloudinary.com/dh4gjirh9/image/upload/v1699002220/Screenshot_2023-11-03_142955_g63bkz.png
                                " alt="project 1
                                " />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Mongodb</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">tech website</h5>
                                </div>
                                <a href="https://indiamart-frontend-ri5z.vercel.app/" target='blank' className='ad-btn'>view</a>
                            </div>
                        </div>
                        
                    </div>

                   



                </div>
               
                </div>
                </Zoom>
    </>
  )
}

export default Projects
