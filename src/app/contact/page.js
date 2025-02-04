import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import quot from '@/img/quot.png'
import Banner from '@/img/banner.jpg'
import Team1 from '@/img/team/1.jpg'
import Team2 from '@/img/team/2.jpg'
import Team4 from '@/img/team/4.jpg'
import Client1 from '@/img/clients/1.png'
import Client2 from '@/img/clients/2.png'
import Client3 from '@/img/clients/3.png'
import Client4 from '@/img/clients/4.png'
import Client5 from '@/img/clients/5.png'
import Client6 from '@/img/clients/6.png'

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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" data-background={Banner}/>
            <section className="section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">Contact <span>Us</span></h2>
                  </div>
                </div>
                <div className="row mb-90">
                  <div className="col-md-4 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <p><b>Bauen Architecture Firm</b></p>
                    <p>Our firm nisl sodales sit amet sapien idea placerat sodales orcite. Vivamus ne miss rhoncus felis bauen architecture.</p>
                    <p><b>VAT :</b> USA002323065B06</p>
                  </div>
                  <div className="col-md-4 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <p><b>Contact Details</b></p>
                    <p><b>Phone :</b> +1 203-123-0606</p>
                    <p><b>Email :</b> architecture@bauen.com</p>
                    <p><b>Address :</b> 24 King St, Charleston, 29401 USA</p>
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
            <section className="testimonials">
              <div className="background bg-img bg-fixed section-padding pb-0" data-background={Banner} data-overlay-dark="3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="vid-area">
                        <div className="vid-icon">
                          <a className="play-button vid" href="https://youtu.be/RziCmLzpFNY">
                            <svg className="circle-fill">
                              <circle cx="43" cy="43" r="39" stroke="#fff" strokeWidth=".5"/>
                            </svg>
                            <svg className="circle-track">
                              <circle cx="43" cy="43" r="39" stroke="none" strokeWidth="1" fill="none"/>
                            </svg>
                            <span className="polygon">
                                                <i className="ti-control-play"/>
                                            </span> </a>
                        </div>
                        <div className="cont mt-15 mb-30">
                          <h5>View promo video</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="testimonials-box animate-box" data-animate-effect="fadeInUp">
                        <div className="head-box">
                          <h4>What Client's Say?</h4>
                        </div>
                        <div className="owl-carousel owl-theme">
                          <div className="item"><span className="quote"><img src={quot} alt=""/></span>
                            <p>Architect dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                            <div className="info">
                              <div className="author-img"><img src={Team1} alt=""/></div>
                              <div className="cont">
                                <h6>Jason Brown</h6> <span>Crowne Plaza Owner</span>
                              </div>
                            </div>
                          </div>
                          <div className="item"> <span className="quote">
                                                <img src={quot} alt=""/>
                                            </span>
                            <p>Interior dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                            <div className="info">
                              <div className="author-img"><img src={Team2} alt=""/></div>
                              <div className="cont">
                                <h6>Emily White</h6> <span>Armada Owner</span>
                              </div>
                            </div>
                          </div>
                          <div className="item"> <span className="quote">
                                                <img src={quot} alt=""/>
                                            </span>
                            <p>Urban dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                            <div className="info">
                              <div className="author-img"><img src={Team4} alt=""/></div>
                              <div className="cont">
                                <h6>Jesica Smith</h6> <span>Alsa Manager</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="clients">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="owl-carousel owl-theme">
                      <div className="clients-logo">
                        <a href="#0"><img src={Client1} alt=""/></a>
                      </div>
                      <div className="clients-logo">
                        <a href="#0"><img src={Client2} alt=""/></a>
                      </div>
                      <div className="clients-logo">
                        <a href="#0"><img src={Client3} alt=""/></a>
                      </div>
                      <div className="clients-logo">
                        <a href="#0"><img src={Client4} alt=""/></a>
                      </div>
                      <div className="clients-logo">
                        <a href="#0"><img src={Client5} alt=""/></a>
                      </div>
                      <div className="clients-logo">
                        <a href="#0"><img src={Client6} alt=""/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
          </div>
        </div>
        <script src="js/jquery-3.6.3.min.js" strategy="beforeInteractive"></script>
        <script src="js/jquery-migrate-3.0.0.min.js" strategy="beforeInteractive"></script>
        <script src="js/modernizr-2.6.2.min.js" strategy="beforeInteractive"></script>
        <script src="js/imagesloaded.pkgd.min.js" strategy="beforeInteractive"></script>
        <script src="js/jquery.isotope.v3.0.2.js" strategy="beforeInteractive"></script>
        <script src="js/popper.min.js" strategy="beforeInteractive"></script>
        <script src="js/bootstrap.min.js" strategy="beforeInteractive"></script>
        <script src="js/scrollIt.min.js" strategy="beforeInteractive"></script>
        <script src="js/jquery.waypoints.min.js" strategy="beforeInteractive"></script>
        <script src="js/owl.carousel.min.js" strategy="beforeInteractive"></script>
        <script src="js/jquery.stellar.min.js" strategy="beforeInteractive"></script>
        <script src="js/jquery.magnific-popup.js" strategy="beforeInteractive"></script>
        <script src="js/YouTubePopUp.js" strategy="beforeInteractive"></script>
        <script src="js/before-after.js" strategy="beforeInteractive"></script>
        <script src="js/custom.js" strategy="beforeInteractive"></script>
      </>
  )
}
