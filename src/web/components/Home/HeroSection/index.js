import React from 'react'
import {Button} from 'react-bootstrap'
function HeroSection() {
      return (
            <section className="hero-section sec-padding">
                  <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                              <div class="hero-content">
                                    <div class="hero-title">
                                          <h1 className="title-dark">The Most In-Demand</h1>
                                          <h1 className="title-red">No-1 Programming Language is</h1>
                                          <h1 className="title-green">JavaScript by 2021</h1>
                                    </div>
                                    <div className="hero-sub-title">
                                          <p>According to Stack Overflow’s 2020 Developer Survey, 
                                          JavaScript currently stands as the most commonly-used language in the world (69.7%).</p>
                                          <p>
                                          JavaScript is the most common coding language in use today around the world. This is for a good reason: most web browsers utilize it and it’s one of the easiest languages to learn.  
                                          </p>
                                    </div>
                                    <div className="hero-btn">
                                          <Button className="web-btn" href="/register" >Enroll Now</Button> {' '}
                                    </div>
                              </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                              <div className="hero-image">
                                    <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default HeroSection
