import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import Script from "next/script";
import Quot from '@/img/quot.png'
import Team1 from '@/img/team/1.jpg'
import Team2 from '@/img/team/2.jpg'
import Team4 from '@/img/team/4.jpg'
import Icon1 from '@/img/icons/icon-1.png'
import Icon2 from '@/img/icons/icon-2.png'
import Icon3 from '@/img/icons/icon-3.png'
import Icon4 from '@/img/icons/icon-4.png'
import Icon5 from '@/img/icons/icon-5.png'
import Icon6 from '@/img/icons/icon-6.png'
import Client1 from '@/img/clients/1.png'
import Client2 from '@/img/clients/2.png'
import Client3 from '@/img/clients/3.png'
import Client4 from '@/img/clients/4.png'
import Client5 from '@/img/clients/5.png'
import Client6 from '@/img/clients/6.png'
import Banner from '@/img/banner.jpg'

export default function Service() {
  return (
      <>
        {/*<div className="preloader-bg"></div>*/}
        {/*<div id="preloader">*/}
        {/*  <div id="preloader-status">*/}
        {/*    <div className="preloader-position loader"><span></span></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="progress-wrap cursor-pointer">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
          </svg>
        </div>
        <a href="#" className="js-bauen-nav-toggle bauen-nav-toggle"><i></i></a>
        <Sidebar/>
        <div id="bauen-main">
          <div className="content-wrapper">
            <section className="content-lines-wrapper">
              <div className="content-lines-inner">
                <div className="content-lines"></div>
              </div>
            </section>
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" data-background={Banner}></section>
            <section className="services section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">Our <span>Services</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="item">
                      <a href="architecture.html"> <img src={Icon1} alt=""/>
                        <h5>Architecture</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">01</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <a href="interior-design.html"> <img src={Icon2} alt=""/>
                        <h5>Interior Design</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">02</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <a href="urban-design.html"> <img src={Icon3} alt=""/>
                        <h5>Urban Design</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">03</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <a href="planning.html"> <img src={Icon4} alt=""/>
                        <h5>Planing</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">04</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <a href="3d-modelling.html"> <img src={Icon6} alt=""/>
                        <h5>3D Modelling</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">05</div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <a href="decor-plan.html"> <img src={Icon5} alt=""/>
                        <h5>Decor Plan</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">06</div>
                      </a>
                    </div>
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
                              <circle cx="43" cy="43" r="39" stroke="#fff" strokeWidth=".5"></circle>
                            </svg>
                            <svg className="circle-track">
                              <circle cx="43" cy="43" r="39" stroke="none" strokeWidth="1" fill="none"></circle>
                            </svg>
                            <span className="polygon">
                                                <i className="ti-control-play"></i>
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
                          <div className="item"><span className="quote"><img src={Quot} alt=""/></span>
                            <p>Architect dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                            <div className="info">
                              <div className="author-img"><img src={Team1} alt=""/></div>
                              <div className="cont">
                                <h6>Jason Brown</h6> <span>Crowne Plaza Owner</span>
                              </div>
                            </div>
                          </div>
                          <div className="item"> <span className="quote">
                                                <img src={Quot} alt=""/>
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
                                                <img src={Quot} alt=""/>
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
