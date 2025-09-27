import React from 'react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import Link from 'next/link'
import VideoPromo from '../../components/videoPromo'
import DefaultPageNavigator from '../../components/defaultPageNavigator'

export const metadata = {
  title: 'Service - Medi Architect',
  description: 'Learn more about our company and team at Medi Architect.',
  'og:title': 'About Us - Medi Architect',
  'og:description': 'Learn more about our architecture firm, our team, and the values that drive our designs. Based in Canada.',
  'og:type': 'website',
};

export default function Service() {
  
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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" style={{ backgroundImage: "url('/img/banner.webp')" }}/>
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
                        <p>"Shaping urban spaces that harmonize with nature, culture, and community, we design cities that breathe and belong."</p>
                        <div className="numb">03</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-4.png'} alt=""/>
                        <h5>Planing</h5>
                        <div className="line"></div>
                        <p>"Through mindful planning, we weave culture, nature, and community into frameworks that nurture growth and harmony."</p>
                        <div className="numb">04</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-6.png'} alt=""/>
                        <h5>3D Modelling</h5>
                        <div className="line"></div>
                        <p>"Our 3D models go beyond visuals, offering interactive experiences that communicate design with clarity and emotion."</p>
                        <div className="numb">05</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <Link href="/"> <img src={'/img/icons/icon-5.png'} alt=""/>
                        <h5>landscape</h5>
                        <div className="line"></div>
                        <p>"Our landscapes evoke harmony and serenity, shaping outdoor spaces that inspire reflection, interaction, and belonging."</p>
                        <div className="numb">06</div>
                      </Link>
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
