'use client'
import React, { useEffect, useState } from 'react'

export default function VideoPromo() {
  const [ reviews, setReviews ] = useState([])

  const GOOGLE_REVIEW_END_POINT = 'https://data.accentapi.com/feed/25603738.json?nocache=1758894791650'

  const REVIEW_KEY = 'Reviews'
  const REVIEW_TIMESTAMP_KEY = "Reviews-TimeStamp";
  const EXPIRY_TIME = 24 * 60 * 60 * 1000;

  useEffect(() => {
    const storedReviews = localStorage.getItem(REVIEW_KEY)
    const storedTime = localStorage.getItem(REVIEW_TIMESTAMP_KEY);

    if (storedReviews && storedTime) {
      const isExpired = Date.now() - Number(storedTime) > EXPIRY_TIME;

      if (!isExpired) {
        setReviews(JSON.parse(storedReviews));
        return; // stop here, no API call
      }
    }
      fetch(GOOGLE_REVIEW_END_POINT, {
        method: 'GET',
        redirect: 'follow'
      })
      .then((response) => response.json()).then((result) => {

        const filterReviews = result?.reviews?.filter((review) => review.review_text) // keep only reviews with text
            ?.sort((a, b) => b.review_text.length - a.review_text.length) // sort by text length (desc)
            ?.slice(0, 7)

        if (filterReviews?.length) {
          localStorage.setItem(REVIEW_KEY, JSON.stringify(filterReviews));
          localStorage.setItem(REVIEW_TIMESTAMP_KEY, Date.now().toString()); 
          setReviews(filterReviews);
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
      <>
        <section className="testimonials">
          <div className="background bg-img bg-fixed section-padding pb-0" style={{ backgroundImage: 'url(\'/img/banner.webp\')' }} data-overlay-dark="3">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/*<div className="vid-area">*/}
                  {/*  <div className="vid-icon">*/}
                  {/*    <a className="play-button vid" href="https://youtu.be/RziCmLzpFNY">*/}
                  {/*      <svg className="circle-fill">*/}
                  {/*        <circle cx="43" cy="43" r="39" stroke="#fff" strokeWidth=".5"></circle>*/}
                  {/*      </svg>*/}
                  {/*      <svg className="circle-track">*/}
                  {/*        <circle cx="43" cy="43" r="39" stroke="none" strokeWidth="1" fill="none"></circle>*/}
                  {/*      </svg>*/}
                  {/*      <span className="polygon">*/}
                  {/*        <i className="ti-control-play"></i>*/}
                  {/*      </span>*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*  <div className="cont mt-15 mb-30">*/}
                  {/*    <h5>View promo video</h5>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="testimonials-box animate-box" data-animate-effect="fadeInUp">
                    <div className="head-box">
                      <h4>What Client&#39;s Say?</h4>
                    </div>
                    <div className="owl-carousel owl-theme">
                      {
                        reviews.map((review, index) => {
                          return <div key={index} className="item">
                        <span className="quote">
                          <img src={'/img/quot.png'} alt=""/>
                        </span>
                            <p dangerouslySetInnerHTML={{ __html: review?.review_text || '' }}/>
                            <div className="info">
                              <div className="author-img">
                                <img src={review?.reviewer_photo_link} alt=""/>
                              </div>
                              <div className="cont">
                                <h6>{review?.reviewer_name}</h6>
                                <span>
                                   {Array.from({ length: review?.rating || 0 }).map((_, i) => (
                                       <i key={i} className="ti-star"/>
                                   ))}
                                </span>
                              </div>
                            </div>
                          </div>
                        })
                      }
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
