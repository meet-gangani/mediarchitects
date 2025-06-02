import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
      <aside id="bauen-aside">
        <div className="bauen-logo">
          <Link href="/"><img src={'/img/logo.png'} className="logo-img rounded-3" alt=""/>
            <h2>Medi Architect<span>INNOVATE DESIGN</span></h2>
          </Link>
        </div>
        <nav className="bauen-main-menu">
          <ul>
            <li className="active"><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li className="bauen-sub"><Link href="/service">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
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
