'use client'
import Sidebar from './sidebar'
import { STATIC_DATA } from '../helper/static'
import VideoPromo from './videoPromo'
import Footer from './footer'
import React, { useState } from 'react'

export const ContactUs = () => {

  const [ contactInfo, setContactInfo ] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [ isFieldsEmpty, setIsFieldEmpty ] = useState(false)

  const handleGmailRedirect = (e) => {
    e.preventDefault()

    const { email, subject, message, phone, name } = contactInfo

    if (!email || !subject || !message || !phone || !name) {
      return setIsFieldEmpty(true)
    }

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.open(gmailURL, '_blank')

    setContactInfo({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsFieldEmpty(false)
  }

  async function handleInputChange(e, keyName) {
    setContactInfo({ ...contactInfo, [keyName]: e.target.value })
    setIsFieldEmpty(false)
  }

  return (
      <>
        {/*<div className="preloader-bg"/>*/}
        {/*<div id="preloader">*/}
        {/*  <div id="preloader-status">*/}
        {/*    <div className="preloader-position loader"><span/></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<DefaultPageNavigator/>*/}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
          </svg>
        </div>
        <a href="#" className="js-bauen-nav-toggle bauen-nav-toggle"><i/></a>
        <Sidebar/>
        <div id="bauen-main">
          <div className="content-wrapper">
            <section className="content-lines-wrapper">
              <div className="content-lines-inner">
                <div className="content-lines"/>
              </div>
            </section>
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" style={{ backgroundImage: 'url(\'/img/banner.webp\')' }}/>
            <section className="section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">Contact <span>Us</span></h2>
                  </div>
                </div>
                <div className="row mb-90">
                  <div className="col-md-4 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <p><b>Medi Architecture Firm</b></p>
                    <p>At Medi Architects, we believe in creating spaces that seamlessly blend with nature and connect deeply with people. Our practice is dedicated to designing interactive and
                      meaningful architecture that captivates the eye and nourishes the soul. Rooted in earth and culture, our designs evoke tranquility and serenity—creating experiences rather than
                      just spaces.</p>
                  </div>
                  <div className="col-md-4 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <p><b>Contact Details</b></p>
                    <p><b>Phone :</b> {STATIC_DATA.PHONE}</p>
                    <p><b>Email :</b> {STATIC_DATA.EMAIL}</p>
                    <p><b>Address :</b> {STATIC_DATA.ADDRESS}</p>
                  </div>
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <p><b>Contact Form</b></p>
                    <form method="post" className="contact__form" action="https://duruthemes.com/demo/html/bauen/multipage-lightsidebar/mail.php">
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-success contact__msg" style={{ display: 'none' }} role="alert">
                            Your message was sent successfully.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                              name="name"
                              type="text"
                              placeholder="Your Name *"
                              required
                              value={contactInfo?.name}
                              onChange={(e) => handleInputChange(e, 'name')}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                              name="email"
                              type="email"
                              placeholder="Your Email *"
                              required
                              value={contactInfo?.email}
                              onChange={(e) => handleInputChange(e, 'email')}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                              name="phone"
                              type="text"
                              placeholder="Your Number *"
                              required
                              value={contactInfo?.phone}
                              onChange={(e) => handleInputChange(e, 'phone')}
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                              name="subject"
                              type="text"
                              placeholder="Subject *"
                              required
                              value={contactInfo?.subject}
                              onChange={(e) => handleInputChange(e, 'subject')}
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                              name="message"
                              id="message" cols="30"
                              rows="4"
                              placeholder="Message *"
                              required
                              value={contactInfo?.message}
                              onChange={(e) => handleInputChange(e, 'message')}
                          />
                        </div>
                        {
                          (!contactInfo?.name || !contactInfo?.email || !contactInfo?.phone || !contactInfo?.subject || !contactInfo?.message) && isFieldsEmpty ?
                              <p style={{ color: 'red'}}>Please fill up the required fields.</p> :
                              null
                        }
                        <div className="col-md-12 mt-3">
                          <input name="submit" type="submit" value="Send Message" onClick={handleGmailRedirect}/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-30 animate-box" data-animate-effect="fadeInUp">
                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13419.040333881774!2d-79.93218134282569!3d32.77209999120473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a1ae84ff639%3A0xe5c782f71924a526!2s24%20King%20St%2C%20Charleston%2C%20SC%2029401%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1635894790855!5m2!1str!2str"*/}
                    {/*    width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="map"/>*/}
                  </div>
                </div>
              </div>
            </section>
            <VideoPromo/>
            <Footer/>
          </div>
        </div>
      </>
  )
}