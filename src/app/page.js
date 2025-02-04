'use client'
import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Slider1 from '@/img/slider/1.jpg'
import Slider2 from '@/img/slider/2.jpg'
import Slider3 from '@/img/slider/3.jpg'
import Slider4 from '@/img/slider/4.jpg'
import Icon1 from '@/img/icons/icon-1.png'
import Icon2 from '@/img/icons/icon-2.png'
import Icon3 from '@/img/icons/icon-3.png'
import About from '@/img/about.jpg'
import Project1 from '@/img/projects/1.jpg'
import Project2 from '@/img/projects/2.jpg'
import Project3 from '@/img/projects/3.jpg'
import Project4 from '@/img/projects/4.jpg'
import Quot from '@/img/quot.png'
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


export default function Home() {

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
          <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
              <div className="text-end item bg-img" data-overlay-dark="3" data-background={Slider1}>
                <div className="v-middle caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 offset-md-5">
                        <div className="o-hidden">
                          <h1>Innovate Desing in Toronto</h1>
                          <p>Architecture viverra tellus nec massa dictum the euismoe.
                            <br/>Curabitur viverra the posuere aukue velit.
                          </p>
                          <div className="butn-light mt-30 mb-30"><a href="https://1.envato.market/mDnXD" target="_blank"><span>Buy Now</span></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end item bg-img" data-overlay-dark="4" data-background={Slider2}>
                <div className="v-middle caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 offset-md-5">
                        <div className="o-hidden">
                          <h1>Innovate Desing in Canada</h1>
                          <p>Architecture viverra tellus nec massa dictum the euismoe.
                            <br/>Curabitur viverra the posuere aukue velit.
                          </p>
                          <div className="butn-light mt-30 mb-30"><a href="https://1.envato.market/mDnXD" target="_blank"><span>Buy Now</span></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-corner"></div>
            <div className="hero-corner3"></div>
          </header>
          <div className="content-wrapper">
            <section className="content-lines-wrapper">
              <div className="content-lines-inner">
                <div className="content-lines"></div>
              </div>
            </section>
            <section className="about section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">About <span>Bauen</span></h2>
                    <p>Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no
                      curabit tristique.</p>
                    <p>Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
                    <p>Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami
                      acsestion.</p>
                  </div>
                  <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                      <div className="img"><img src={About} className="img-fluid" alt=""/></div>
                      <div className="about-img-2 about-buro">Canada Office</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="projects section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="section-title">Our <span>Projects</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Project1} alt=""/></div>
                        <div className="con">
                          <h6><a href="cotton-house.html">Interior</a></h6>
                          <h5><a href="cotton-house.html">Cotton House</a></h5>
                          <div className="line"></div>
                          <a href="cotton-house.html"><i className="ti-arrow-right"></i></a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Project2} alt=""/></div>
                        <div className="con">
                          <h6><a href="armada-center.html">Exterior</a></h6>
                          <h5><a href="armada-center.html">Armada Center</a></h5>
                          <div className="line"></div>
                          <a href="armada-center.html"><i className="ti-arrow-right"></i></a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Project3} alt=""/></div>
                        <div className="con">
                          <h6><a href="stonya-villa.html">Urban</a></h6>
                          <h5><a href="stonya-villa.html">Stonya Villa</a></h5>
                          <div className="line"></div>
                          <a href="stonya-villa.html"><i className="ti-arrow-right"></i></a>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Project4} alt=""/></div>
                        <div className="con">
                          <h6><a href="prime-hotel.html">Interior</a></h6>
                          <h5><a href="prime-hotel.html">Prime Hotel</a></h5>
                          <div className="line"></div>
                          <a href="prime-hotel.html"><i className="ti-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="services section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
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
                </div>
              </div>
            </section>
            <section className="bauen-blog section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="section-title">Current <span>News</span></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Slider1} alt=""/></div>
                        <div className="con"> <span className="category">
                                            <a href="blog.html">Architecture </a> - 20.12.2024
                                        </span>
                          <h5><a href="post.html">Modern Architectural Structures</a></h5>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Slider2} alt=""/></div>
                        <div className="con"> <span className="category">
                                            <a href="blog.html">Interior</a> - 18.12.2024
                                        </span>
                          <h5><a href="post.html">Modernism in Architecture</a></h5>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Slider3} alt=""/></div>
                        <div className="con"> <span className="category">
                                            <a href="blog.html">Urban</a> - 16.12.2024
                                        </span>
                          <h5><a href="post.html">Postmodern Architecture</a></h5>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={Slider4} alt=""/></div>
                        <div className="con"> <span className="category">
                                            <a href="blog.html">Planing</a> - 14.12.2024
                                        </span>
                          <h5><a href="post.html">Modern Architecture Buildings</a></h5>
                        </div>
                      </div>
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
      </>
)
}
