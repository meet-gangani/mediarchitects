'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/footer'
import Sidebar from '../../../components/sidebar'
import { PROJECTS } from '../../../helper/static'
import Link from 'next/link'

export default function ProjectClient({ id }) {

  const [ currentProject, setCurrentProject ] = useState(null)

  useEffect(() => {
    const project = PROJECTS.find((project) => project.id === Number(id))
    setCurrentProject(project)
  }, [ id ])

  return (
      <>
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
            <section className="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" data-background="/img/banner.webp" style={{ backgroundImage: `url(/img/banner.jpg)` }}/>
            <section className="section-padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="section-title2">{currentProject?.projectName}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p>{currentProject?.description}</p>
                  </div>
                  <div className="col-md-4">
                    <p><b>Year : </b> {currentProject?.year}</p>
                    <p><b>Project Name : </b> {currentProject?.projectName}</p>
                    <p><b>Area : </b> {currentProject?.area}</p>
                    <p><b>Location : </b> {currentProject?.location}</p>
                  </div>
                </div>
                <div className="row mt-30">
                  {
                    currentProject?.images.map((img, index) => {
                      return (
                          <div className="col-md-6 gallery-item">
                            <Link href={img} target={'_blank'} title="Architecture" className="img-zoom">
                              <div className="gallery-box">
                                <div className="gallery-img"><img src={img} className="img-fluid mx-auto d-block" alt="work-img"/></div>
                              </div>
                            </Link>
                          </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className="projects-prev-next">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      {
                        currentProject?.id > 1 ?
                            <div className="projects-prev-next-left">
                              <Link href={`/project/${currentProject?.id - 1}`}> <i className="ti-arrow-left"></i> Previous Project</Link>
                            </div> : <div className="projects-prev-next-right" style={{ color: '#909090', cursor: 'pointer' }}><i className="ti-arrow-left"></i> Previous Project</div>
                      }
                      <Link href={`/project/#`}><i className="ti-layout-grid3-alt"></i></Link>
                      {
                        currentProject?.id < PROJECTS.length ?
                            <div className="projects-prev-next-right">
                              <Link href={`/project/${currentProject?.id + 1}`}>Next Project <i className="ti-arrow-right"></i></Link>
                            </div> : <div className="projects-prev-next-right" style={{ color: '#909090', cursor: 'pointer' }}>Next Project <i className="ti-arrow-right"></i></div>
                      }
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
