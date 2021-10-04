import React from 'react'

export default function Testimonials() {
      return (
            <section className="testi sec-padding">
                              <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12 text-center mb-3">
                                          <div className="sec-heading">
                                                <h2 className="head title-dark">Testimonials</h2>
                                                {/* <h2 className="head title-red">E-Learning </h2> */}
                                          </div>
                                          <div className="sub_heading">
                                                <p>Look into yourself, get something in return as your achivement.</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                          <div className="testi-image">
                                                <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                          <div class="testi-content">
                                                <div class="testi-title">
                                                      <h1 className="title-dark">Investing in</h1>
                                                      <h1 className="title-dark">Knowledge and </h1>
                                                      <h1 className="title-red">Your future</h1>
                                                </div>
                                                <div className="testi-sub-title">
                                                      <p>With the help of own learning create your own path and</p>
                                                      <p>drive your own skills on your own to archive what you seek</p>
                                                </div>
                                                {/* <div className="testi-btn">
                                                      <Button className="web-btn" href="/register" >Enroll Now</Button> {' '}
                                                </div> */}
                                          </div>
                                    </div>
                                    
                              </div>
                        </section>
      )
}
