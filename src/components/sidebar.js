import React from 'react'
import Link from 'next/link'
import { STATIC_DATA } from '@/helper/static'
// import { MdOutlineAddIcCall, MdOutlineMail } from 'react-icons/md'

export default function Sidebar() {
  return (
      <aside id="bauen-aside">
        <div className="bauen-logo">
          <Link href="/"><img src={'/img/logo.png'} className="logo-img rounded-3" alt=""/>
            <h2>MEDI<span>ARCHITECT</span></h2>
          </Link>
        </div>
        <nav className="bauen-main-menu">
          <ul>
            <li className="active"><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li className="bauen-sub"><Link href="/service">Services</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="bauen-footer">
          <ul>
            <li><Link href={STATIC_DATA.PHONE_REDIRECTION} target="_blank" rel="noopener noreferrer"><i className="ti-mobile"/></Link></li>
            <li><Link href={STATIC_DATA.EMAIL_REDIRECTION} target="_blank" rel="noopener noreferrer"><i className="ti-email"/></Link></li>
            <li><a href="https://www.instagram.com/medi_architects_" target="_blank" rel="noopener noreferrer"><i className="ti-instagram"/></a></li>
          </ul>
        </div>
      </aside>
  )
}
