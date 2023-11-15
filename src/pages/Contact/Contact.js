import React from 'react'
import './Contact.css'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
// import Pulse from 'react-reveal/Pulse';
import { useState ,useEffect} from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log("submitted")
    // }
    const [isSubmitted, setIsSubmitted] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setIsSubmitted(true)
                // Clear the form after successful submission
                setFormData({ name: '', email: '', message: '' });
                // console.log('Form data cleared:', formData);


            } else {
                console.error('Form submission failed!');
            }
        } catch (error) {
            console.error('Error occurred while submitting the form:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <>
                    <div className="contact" id='contact'>
                        <div className="card card0 border-0">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                                    <div className="card1">
                                        <div className="row border-line">
                                            <img src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/contact-us/contactus-hero.png" alt="contact" className='image' />

                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-lg-6 ">
                                    <div className="card2 d-flex px-4 py-5" >
                                        <div className="row">
                                            <div className="row text-center">
                                                <h6>Contact with

                                                    <AiFillLinkedin color='blue' className='ms-2' size={30} />
                                                    <AiFillGithub color='black' size={30} className='ms-2' />
                                                    <AiFillFacebook color='blue' size={30} className="ms-2" />
                                                </h6>

                                            </div>


                                            <div className="row px-3 mb-4">
                                                <div className="line" />
                                                <small className="or text-center">OR</small>
                                                <div className="line" />

                                            </div>
                                            <div className="row px-3">
                                                <input type="text" name='name' placeholder='enter your name' value={formData.name} onChange={handleChange} className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <input type="email" name='email' placeholder='enter your email' value={formData.email} onChange={handleChange} className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <textarea type="text" name='message' placeholder='enter your message' value={formData.message} onChange={handleChange} className='mb-3' />
                                            </div>
                                            <div className="row px-3">
                                                <button className='button' type='submit'>SEND MESSAGE</button>
                                            </div>
                                            {isSubmitted && (
                                                <p className="success-message text-center" >Thank you! Your message has been successfully sent     <span className="text-success" style={{ color: 'green' }}>✔</span>
                                                </p>
                                                
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            </form>
        </>
    )
}

export default Contact
