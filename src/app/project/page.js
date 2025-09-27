import React from 'react'
import Sidebar from '../../components/sidebar'
import VideoPromo from '../../components/videoPromo'
import Footer from '../../components/footer'

export default function projects() {
  return (
      <>
        <div data-spy="scroll" data-target=".navbar" data-offset="50">
          {/* Preloader */}
          <div className="preloader-bg"></div>
          <div id="preloader">
            <div id="preloader-status">
              <div className="preloader-position loader"><span></span></div>
            </div>
          </div>
          {/* Scroll to top progress bar */}
          <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
          </div>
          <Sidebar/>
          <div id="bauen-main">
            <div className="content-wrapper">
              {/* Lines */}
              <section className="content-lines-wrapper">
                <div className="content-lines-inner">
                  <div className="content-lines"></div>
                </div>
              </section>
              <section
                  className="banner-header banner-img bg-img bg-fixed pb-0"
                  data-background="/img/banner.webp"
                  data-overlay-darkgray="5"
              />

              <section className="projects2 section-padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                      <h2 className="section-title">
                        Our <span>Projects</span>
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 project-masonry-wrapper-padding">
                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/2" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/CK-BUNGLOWS/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">Mr.Ck bunglow</h4>
                                <div className="project-masonry-item-category">Interior</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/6" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/DEVRAJBHAI-BUNGLOWS/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">Mr.Devrajbhai Bunglows</h4>
                                <div className="project-masonry-item-category">Urban</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/4" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/KRISHANA-RESIDENCY/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">krishna residency</h4>
                                <div className="project-masonry-item-category">Interior</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 project-masonry-wrapper-padding">
                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/5" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/SKY-RISE/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">sky rise Residence</h4>
                                <div className="project-masonry-item-category">Urban</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/3" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/THATS-PEOPLE/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">that's people</h4>
                                <div className="project-masonry-item-category">Exterior</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="portfolio-item-wrapp">
                        <div className="portfolio-item">
                          <div className="project-masonry-wrapper">
                            <a href="/project/1" className="project-masonry-item-img-link">
                              <img src="/img/project-imgs/VIKASBHAI/1.webp" alt=""/>
                              <div className="project-masonry-item-img"></div>
                              <div className="project-masonry-item-content">
                                <h4 className="project-masonry-item-title">ladvi bunglow</h4>
                                <div className="project-masonry-item-category">Interior</div>
                              </div>
                            </a>
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
        </div>
      </>
  )
}