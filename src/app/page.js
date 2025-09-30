import React from 'react'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Link from 'next/link'
import VideoPromo from '../components/videoPromo'
import DefaultPageNavigator from '../components/defaultPageNavigator'
import { PROJECTS } from '../helper/static'

export default function Home() {

  return (
      <>
        {/*<div className="preloader-bg"></div>*/}
        {/*<div id="preloader">*/}
        {/*  <div id="preloader-status">*/}
        {/*    <div className="preloader-position loader"><span></span></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<DefaultPageNavigator/>*/}
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
              {
                PROJECTS.map((project, index) => {
                  return (
                      <div key={index} className="text-end item bg-img" data-overlay-dark="3" style={{ backgroundImage: `url(${project?.images[0]})` }}>
                        <div className="v-middle caption">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-7 offset-md-5">
                                <div className="o-hidden">
                                  <h1>{project?.tagLine}</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  )
                })
              }
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
                    <p>Architectural firm that believe in creating spaces that seamlessly bind with nature and engage with people on a profound level. Our firm is dedicated to designing interactive and satisfactory architectural pieces that captivate the eye and nourish the soul.</p>
                    <p>Deeply rooted in earth and culture, we feel spaces are those which make one feel tranquil and this evokes the name-'Medi'.</p>
                    <p>Thoughtfully, we thrive to design experiences with serenity rather than spaces.</p>
                  </div>
                  <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                      <div className="img"><img src="/img/about.webp" height={300} className="img-fluid" alt=""/></div>
                      <div className="about-img-2 about-buro"> Ladvi Bunglow</div>
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
                    <div className="owl-carousel owl-theme" style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      alignItems: 'center',
                      columnGap: '30px',
                      width: '100%'
                    }}>
                      {
                        PROJECTS.map((project, index) => {
                          return (
                              <div key={index} className="item" style={{ height: '350px', width: '100%' }}>
                                <div className="position-re o-hidden" style={{ height: '100%', width: '100%' }}>
                                  <img
                                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                      src={`${project?.images[1]}`}
                                      alt=""
                                  />
                                </div>
                                <div className="con">
                                  <h6><Link href={`/project/${project?.id}`}>Interior</Link></h6>
                                  <h5><Link href={`/project/${project?.id}`}>{project?.projectName}</Link></h5>
                                  <div className="line"></div>
                                  <Link href={`/project/${project?.id}`}><i className="ti-arrow-right"></i></Link>
                                </div>
                              </div>
                          );
                        })
                      }
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
                        <p>"Crafting soulful architecture that blends seamlessly with nature and human connection, we design spaces that inspire serenity and belonging."</p>
                        <div className="numb">01</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-2.png'} alt=""/>
                        <h5>Interior</h5>
                        <div className="line"></div>
                        <p>"Our interiors go beyond aesthetics—shaping tranquil, interactive spaces that nurture the soul and inspire everyday living."</p>
                        <div className="numb">02</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-3.png'} alt=""/>
                        <h5>Urban Design</h5>
                        <div className="line"></div>
                        <p>"Shaping urban spaces that harmonize with nature, culture, and community, we design cities that breathe and belong"</p>
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
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/1.webp'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Architecture </Link> - 20.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Modern Architectural Structures</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/2.webp'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Interior</Link> - 18.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Modernism in Architecture</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/3.webp'} alt=""/></div>*/}
            {/*            <div className="con"> <span className="category">*/}
            {/*                                <Link href="/">Urban</Link> - 16.12.2024*/}
            {/*                            </span>*/}
            {/*              <h5><Link href="/">Postmodern Architecture</Link></h5>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*          <div className="item">*/}
            {/*            <div className="position-re o-hidden"><img src={'/img/slider/4.webp'} alt=""/></div>*/}
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
