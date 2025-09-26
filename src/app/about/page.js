import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import VideoPromo from '../../components/videoPromo'
import Link from 'next/link'
import DefaultPageNavigator from '../../components/defaultPageNavigator'
import { TEAMS } from '@/helper/static'

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
        {/*<DefaultPageNavigator/>*/}
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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" style={{ backgroundImage: "url('/img/banner.webp')" }}></section>
            <section className="about section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">About <span>Medi</span></h2>
                    <p>Architectural firm that believe in creating spaces that seamlessly bind with nature and engage with people on a profound level. Our firm is dedicated to designing interactive and satisfactory architectural pieces that captivate the eye and nourish the soul.</p>
                    <p>Deeply rooted in earth and culture, we feel spaces are those which make one feel tranquil and this evokes the name-'Medi'.</p>
                    <p>Thoughtfully, we thrive to design experiences with serenity rather than spaces.</p>
                  </div>
                  <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                      <div className="img"><img src={'/img/about.webp'} className="img-fluid" alt=""/></div>
                      <div className="about-img-2 about-buro">Sky Rise Residence</div>
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
                    {
                      TEAMS.map((team, index) => {
                        return <div key={index} className="item">
                          <div className="img">
                            {/*<Link href="/about">*/}
                              <img src={team.image} alt=""/>
                            {/*</Link>*/}
                          </div>
                          <div className="info">
                            <h6>{team.name}</h6>
                            <p>{team.role}</p>
                            <div className="social valign">
                              <div className="full-width">
                                <p>{team.qualification}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      })
                    }
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
