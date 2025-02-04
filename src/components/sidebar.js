import React from 'react'
import Logo from '@/img/logo.png'

export default function Sidebar(){
  return(
      <aside id="bauen-aside">
        <div className="bauen-logo">
          <a href="index.html"> <img src={Logo} className="logo-img" alt=""/>
            <h2>BAUEN<span>INNOVATE DESIGN</span></h2>
          </a>
        </div>
        <nav className="bauen-main-menu">
          <ul>
            <li className="active"><a href='index.html'>Home</a></li>
            <li><a href='about.html'>About</a></li>
            <li className='bauen-sub'><a href='#'>Services <i className="ti-angle-down"></i></a>
              <ul>
                <li><a href='services.html'>Services 01</a></li>
                <li><a href='services2.html'>Services 02</a></li>
                <li><a href='services3.html'>Services 03</a></li>
                <li><a href='services4.html'>Services 04</a></li>
              </ul>
            </li>
            <li className='bauen-sub'><a href='#'>Projects <i className="ti-angle-down"></i></a>
              <ul>
                <li><a href='projects.html'>Projects 01</a></li>
                <li><a href='projects2.html'>Projects 02</a></li>
                <li><a href='projects3.html'>Projects 03</a></li>
                <li><a href='projects4.html'>Projects 04</a></li>
                <li><a href='project-gallery.html'>Project Gallery</a></li>
                <li><a href='project-page.html'>Project Page</a></li>
              </ul>
            </li>
            <li className="bauen-sub"><a href="#0">Pages <i className="ti-angle-down"></i></a>
              <ul>
                <li><a href="video.html">Video Background</a></li>
                <li><a href="before-after.html">Before After</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="careers.html">Careers</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="faqs.html">Faqs</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="video-gallery.html">Video Gallery</a></li>
                <li><a href="process.html">Process</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a href="not-found-404.html">404 Page</a></li>
              </ul>
            </li>
            <li className="bauen-sub"><a href="#0">Blog <i className="ti-angle-down"/></a>
              <ul>
                <li><a href="blog.html">Blog 01</a></li>
                <li><a href="blog2.html">Blog 02</a></li>
                <li><a href="blog3.html">Blog 03</a></li>
                <li><a href="blog4.html">Blog 04</a></li>
              </ul>
            </li>
            <li><a href='contact.html'>Contact</a></li>
          </ul>
        </nav>
        <div className="bauen-footer">
          <ul>
            <li><a href="#"><i className="ti-facebook"/></a></li>
            <li><a href="#"><i className="ti-twitter"/></a></li>
            <li><a href="#"><i className="ti-instagram"/></a></li>
            <li><a href="#"><i className="ti-pinterest"/></a></li>
          </ul>
        </div>
      </aside>
  )
}
