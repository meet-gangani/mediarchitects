import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import { STATIC_DATA } from '../../helper/static'
import VideoPromo from '../../components/videoPromo'

export const metadata = {
  title: 'Contact - Medi Architect',
  description: 'Learn more about our company and team at Medi Architect.',
};

export default function Contact() {
  return (
      <>
        {/*<div className="preloader-bg"/>*/}
        {/*<div id="preloader">*/}
        {/*  <div id="preloader-status">*/}
        {/*    <div className="preloader-position loader"><span/></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" style={{ backgroundImage: "url('/img/banner.jpg')" }} style={{ backgroundImage: "url('/img/banner.jpg')" }}/>
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
                    <p>Our firm nisl sodales sit amet sapien idea placerat sodales orcite. Vivamus ne miss rhoncus felis medi architecture.</p>
                    <p><b>VAT :</b> USA002323065B06</p>
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
                          <input name="name" type="text" placeholder="Your Name *" required/>
                        </div>
                        <div className="col-md-6 form-group">
                          <input name="email" type="email" placeholder="Your Email *" required/>
                        </div>
                        <div className="col-md-6 form-group">
                          <input name="phone" type="text" placeholder="Your Number *" required/>
                        </div>
                        <div className="col-md-12 form-group">
                          <input name="subject" type="text" placeholder="Subject *" required/>
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required/>
                        </div>
                        <div className="col-md-12">
                          <input name="submit" type="submit" value="Send Message"/>
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
