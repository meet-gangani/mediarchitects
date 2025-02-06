import React from 'react'

export default function VideoPromo() {
  return (
      <>
        <section className="testimonials">
          <div className="background bg-img bg-fixed section-padding pb-0" style={{ backgroundImage: 'url(\'/img/banner.jpg\')' }} data-overlay-dark="3">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="vid-area">
                    <div className="vid-icon">
                      <a className="play-button vid" href="https://youtu.be/RziCmLzpFNY">
                        <svg className="circle-fill">
                          <circle cx="43" cy="43" r="39" stroke="#fff" strokeWidth=".5"></circle>
                        </svg>
                        <svg className="circle-track">
                          <circle cx="43" cy="43" r="39" stroke="none" strokeWidth="1" fill="none"></circle>
                        </svg>
                        <span className="polygon">
                                                <i className="ti-control-play"></i>
                                            </span> </a>
                    </div>
                    <div className="cont mt-15 mb-30">
                      <h5>View promo video</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="testimonials-box animate-box" data-animate-effect="fadeInUp">
                    <div className="head-box">
                      <h4>What Client's Say?</h4>
                    </div>
                    <div className="owl-carousel owl-theme">
                      <div className="item"><span className="quote"><img src={'/img/quot.png'} alt=""/></span>
                        <p>Architect dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                        <div className="info">
                          <div className="author-img"><img src={'/img/team/1.jpg'} alt=""/></div>
                          <div className="cont">
                            <h6>Jason Brown</h6> <span>Crowne Plaza Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="item"> <span className="quote">
                                                <img src={'/img/quot.png'} alt=""/>
                                            </span>
                        <p>Interior dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                        <div className="info">
                          <div className="author-img"><img src={'/img/team/2.jpg'} alt=""/></div>
                          <div className="cont">
                            <h6>Emily White</h6> <span>Armada Owner</span>
                          </div>
                        </div>
                      </div>
                      <div className="item"> <span className="quote">
                                                <img src={'/img/quot.png'} alt=""/>
                                            </span>
                        <p>Urban dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.</p>
                        <div className="info">
                          <div className="author-img"><img src={'/img/team/4.jpg'} alt=""/></div>
                          <div className="cont">
                            <h6>Jesica Smith</h6> <span>Alsa Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="owl-carousel owl-theme">
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/1.png'} alt=""/></a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/2.png'} alt=""/></a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/3.png'} alt=""/></a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/4.png'} alt=""/></a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/5.png'} alt=""/></a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0"><img src={'/img/clients/6.png'} alt=""/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
