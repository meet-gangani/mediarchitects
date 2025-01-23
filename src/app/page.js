'use client'
import React, { useEffect, useState } from 'react'

export default function ComingSoon() {
  const [ timeLeft, setTimeLeft ] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const countdown = () => {
      const now = new Date()
      const eventDate = new Date(2025, 1, 10) // March 10, 2025
      const remTime = eventDate.getTime() - now.getTime()

      if (remTime <= 0) {
        clearInterval(intervalId)
        return
      }

      const s = Math.floor(remTime / 1000) % 60
      const m = Math.floor(remTime / (1000 * 60)) % 60
      const h = Math.floor(remTime / (1000 * 60 * 60)) % 24
      const d = Math.floor(remTime / (1000 * 60 * 60 * 24))

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      })
    }

    const intervalId = setInterval(countdown, 1000)

    return () => clearInterval(intervalId) // Cleanup on component unmount
  }, [])

  return (
      <section className="comming section-padding">
        <div className="v-middle">
          <div className="container">
            <div className="row text-center mb-45">
              <div className="col-md-12">
                <h6>Website is under construction</h6>
                <h2>Coming Soon!</h2>
              </div>
            </div>
            <div className="row text-center mb-45">
              <div className="col-6 offset-md-2 col-md-2">
                <div className="item">
                  <div className="down">
                    <h3>{timeLeft.days}</h3>
                  </div>
                  <div className="item-info">
                    <h6>Days</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="item">
                  <div className="down">
                    <h3>{timeLeft.hours}</h3>
                  </div>
                  <div className="item-info">
                    <h6>Hours</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="item">
                  <div className="down">
                    <h3>{timeLeft.minutes}</h3>
                  </div>
                  <div className="item-info">
                    <h6>Minutes</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="item">
                  <div className="down">
                    <h3>{timeLeft.seconds}</h3>
                  </div>
                  <div className="item-info">
                    <h6>Seconds</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
