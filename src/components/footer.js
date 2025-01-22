import React from 'react'

export default function Footer(){
  return(
      <footer className="main-footer dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Phone</h6>
                </div>
                <p>+1 203-123-0606</p>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Email</h6>
                </div>
                <p>architecture@bauen.com</p>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item fotcont">
                <div className="fothead">
                  <h6>Our Address</h6>
                </div>
                <p>24 King St, Charleston, SC 29401 USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="text-left">
                  <p>© 2024 Bauen. All right reserved.</p>
                </div>
              </div>
              <div className="col-md-4 abot">
                <div className="social-icon"><a href="index.html"><i className="ti-facebook"/></a> <a href="index.html"><i className="ti-twitter"/></a> <a href="index.html"><i
                    className="ti-instagram"/></a> <a href="index.html"><i className="ti-pinterest"/></a></div>
              </div>
              <div className="col-md-4"/>
            </div>
          </div>
        </div>
      </footer>
  )
}
