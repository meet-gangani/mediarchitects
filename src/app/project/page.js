import React from 'react'
import Sidebar from '../../components/sidebar'
import VideoPromo from '../../components/videoPromo'
import Footer from '../../components/footer'
import { PROJECTS } from '../../helper/static'
import Link from 'next/dist/client/app-dir/link'

export default function projects() {
  return (
      <>
        <div data-spy="scroll" data-target=".navbar" data-offset="50">
          {/* Scroll to top progress bar */}
          <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
          </div>
          <a href="#" className="js-bauen-nav-toggle bauen-nav-toggle"><i></i></a>
          <Sidebar/>
          <div id="bauen-main">
            <div className="content-wrapper">
              {/* Lines */}
              <section className="content-lines-wrapper">
                <div className="content-lines-inner">
                  <div className="content-lines"/>
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
                      {PROJECTS.slice(0, PROJECTS.length / 2).map((project) => (
                          <div key={project.id} className="portfolio-item-wrapp">
                            <div className="portfolio-item">
                              <div className="project-masonry-wrapper">
                                <Link href={`/project/${project.id}`} className="project-masonry-item-img-link">
                                  <img src={`${project?.images[1]}`} alt={project.title}/>
                                  <div className="project-masonry-item-img"/>
                                  <div className="project-masonry-item-content">
                                    <h4 className="project-masonry-item-title">{project.projectName}</h4>
                                    <div className="project-masonry-item-category">{project.title}</div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>

                    <div className="col-12 col-md-6 project-masonry-wrapper-padding">
                      {PROJECTS.slice(PROJECTS.length / 2).map((project) => (
                          <div key={project.id} className="portfolio-item-wrapp">
                            <div className="portfolio-item">
                              <div className="project-masonry-wrapper">
                                <Link href={`/project/${project.id}`} className="project-masonry-item-img-link">
                                  <img src={`${project?.images[1]}`} alt={project.title}/>
                                  <div className="project-masonry-item-img"/>
                                  <div className="project-masonry-item-content">
                                    <h4 className="project-masonry-item-title">{project.projectName}</h4>
                                    <div className="project-masonry-item-category">{project.title}</div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                      ))}
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
