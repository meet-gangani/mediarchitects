import React from 'react'
import Sidebar from '../../components/sidebar'
import VideoPromo from '../../components/videoPromo'
import Footer from '../../components/footer'

export default function projects() {
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
          <Sidebar/>
          <h1> hello </h1>
          <VideoPromo/>
          <Footer/>
        </div>
      </>
  )
}