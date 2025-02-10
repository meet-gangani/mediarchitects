import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Link from 'next/link'
import VideoPromo from '../components/videoPromo'

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
              <div className="text-end item bg-img" data-overlay-dark="3" style={{ backgroundImage: 'url(\'/img/slider/1.jpg\')' }}>
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
              <div className="text-end item bg-img" data-overlay-dark="4" style={{ backgroundImage: 'url(\'/img/slider/2.jpg\')' }}>
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
                    <h2 className="section-title">About <span>Medi Architect</span></h2>
                    <p>Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no
                      curabit tristique.</p>
                    <p>Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
                    <p>Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami
                      acsestion.</p>
                  </div>
                  <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                      <div className="img"><img src="/img/about.jpg" className="img-fluid" alt=""/></div>
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
                        <div className="position-re o-hidden"><img src={'/img/projects/1.jpg'} alt=""/></div>
                        <div className="con">
                          <h6><Link href="/">Interior</Link></h6>
                          <h5><Link href="/">Cotton House</Link></h5>
                          <div className="line"></div>
                          <Link href="/"><i className="ti-arrow-right"></i></Link>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={'/img/projects/2.jpg'} alt=""/></div>
                        <div className="con">
                          <h6><Link href="/">Exterior</Link></h6>
                          <h5><Link href="/">Armada Center</Link></h5>
                          <div className="line"></div>
                          <Link href="/"><i className="ti-arrow-right"></i></Link>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={'/img/projects/3.jpg'} alt=""/></div>
                        <div className="con">
                          <h6><Link href="/">Urban</Link></h6>
                          <h5><Link href="/">Stonya Villa</Link></h5>
                          <div className="line"></div>
                          <Link href="/"><i className="ti-arrow-right"></i></Link>
                        </div>
                      </div>
                      <div className="item">
                        <div className="position-re o-hidden"><img src={'/img/projects/4.jpg'} alt=""/></div>
                        <div className="con">
                          <h6><Link href="/">Interior</Link></h6>
                          <h5><Link href="/">Prime Hotel</Link></h5>
                          <div className="line"></div>
                          <Link href="/"><i className="ti-arrow-right"></i></Link>
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
                      <Link href="/"> <img src={'/img/icons/icon-1.png'} alt=""/>
                        <h5>Architecture</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">01</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-2.png'} alt=""/>
                        <h5>Interior Design</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">02</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-3.png'} alt=""/>
                        <h5>Urban Design</h5>
                        <div className="line"></div>
                        <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                        <div className="numb">03</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<section className="bauen-blog section-padding">*/}
            {/*  <div className="container">*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-md-12">*/}
            {/*        <h2 className="section-title">Current <span>News</span></h2>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-md-12">*/}
            {/*        <div className="owl-carousel owl-theme">*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/1.jpg'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Architecture </Link> - 20.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Modern Architectural Structures</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/2.jpg'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Interior</Link> - 18.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Modernism in Architecture</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/3.jpg'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Urban</Link> - 16.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Postmodern Architecture</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/4.jpg'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Planing</Link> - 14.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Modern Architecture Buildings</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
            <VideoPromo/>
            <Footer/>
          </div>
        </div>
      </>
  )
}
