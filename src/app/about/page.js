import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import VideoPromo from '../../components/videoPromo'
import Link from 'next/link'
import DefaultPageNavigator from '../../components/defaultPageNavigator'

export const metadata = {
  title: 'About Us - Medi Architect',
  description: 'Learn more about our company and team at Medi Architect.',
};

export default function About() {
  return (
      <>
        {/*<div className="preloader-bg"></div>*/}
        {/*<div id="preloader">*/}
        {/*  <div id="preloader-status">*/}
        {/*    <div className="preloader-position loader"><span></span></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <DefaultPageNavigator/>
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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" style={{ backgroundImage: "url('/img/banner.jpg')" }}></section>
            <section className="about section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">About <span>Medi Architect</span></h2>
                    <p>Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no
                      curabit tristique.</p>
                    <p>Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
                    <p>Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
                  </div>
                  <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                      <div className="img"><img src={'/img/about.jpg'} className="img-fluid" alt=""/></div>
                      <div className="about-img-2 about-buro">Canada Office</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="team section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="section-title">Our <span>Team</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 owl-carousel owl-theme">
                    <div className="item">
                      <div className="img">
                        <Link href="/"><img src={'/img/team/1.jpg'} alt=""/></Link>
                      </div>
                      <div className="info">
                        <h6>Jason Brown</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>dipl. Arch ETH/SIA</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i
                              className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <Link href="/"><img src={'/img/team/2.jpg'} alt=""/></Link>
                      <div className="info">
                        <h6>Emily White</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>dipl. Arch FH</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <Link href="/"><img src={'/img/team/3.jpg'} alt=""/></Link>
                      </div>
                      <div className="info">
                        <h6>Enrico Samara</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>M.A. FH in Architecture</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i
                              className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <Link href="/"><img src={'/img/team/4.jpg'} alt=""/></Link>
                      </div>
                      <div className="info">
                        <h6>Jesica Smith</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>M.A. FH in Architecture</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i
                              className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <Link href="/"><img src={'/img/team/5.jpg'} alt=""/></Link>
                      </div>
                      <div className="info">
                        <h6>Olivia Brown</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>dipl. Arch FH</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="img">
                        <Link href="/"><img src={'/img/team/6.jpg'} alt=""/></Link>
                      </div>
                      <div className="info">
                        <h6>Fredia Martin</h6>
                        <p>Architect</p>
                        <div className="social valign">
                          <div className="full-width">
                            <p>M.A. FH in Architecture</p> <a href="#"><i className="ti-facebook"></i></a> <a href="#"><i className="ti-twitter-alt"></i></a> <a href="#"><i
                              className="ti-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
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
