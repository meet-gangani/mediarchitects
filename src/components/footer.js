import React from 'react'
import { STATIC_DATA } from '../helper/static'
import Link from 'next/link'

export default function Footer() {
  return (
      <footer className="main-footer dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Phone</h6>
                </div>
                <p>{STATIC_DATA.PHONE}</p>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Email</h6>
                </div>
                <p>{STATIC_DATA.EMAIL}</p>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Our Address</h6>
                </div>
                <p>{STATIC_DATA.ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="text-left">
                  <p>© 2025 Medi Architect. All right reserved.</p>
                </div>
              </div>
              <div className="col-md-4 abot">
                <div className="social-icon">
                  <Link href="#"><i className="ti-facebook"/></Link>
                  <Link href="#"><i className="ti-twitter"/></Link>
                  <Link href="#"><i className="ti-instagram"/></Link>
                  <Link href="#"><i className="ti-pinterest"/></Link><
                  /div>
              </div>
              <div className="col-md-4"/>
            </div>
          </div>
        </div>
      </footer>
  )
}
