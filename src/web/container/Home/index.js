import React from 'react'
import Navigation from '../../components/Layout/Navigation'
import {Button, Accordion} from 'react-bootstrap'
import './index.css';

export default function Home() {
      return (
            <div>
                  <Navigation />
                  <div className="container">  
                        
                        <section className="hero-section sec-padding">
                              <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                          <div class="hero-content">
                                                <div class="hero-title">
                                                      <h1 className="title-dark">Investing in</h1>
                                                      <h1 className="title-dark">Knowledge and </h1>
                                                      <h1 className="title-red">Your future</h1>
                                                </div>
                                                <div className="hero-sub-title">
                                                      <p>With the help of own learning create your own path and</p>
                                                      <p>drive your own skills on your own to archive what you seek</p>
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
                        <section className="sec-padding">
                              <div className="row why-choose">
                                    <div className="col-lg-3 col-md-3 col-12">
                                          <div className="sec-heading">
                                                <h2 className="head title-dark">Why Choose</h2>
                                                <img src="/Newlogo.jpg" className="img-fluid wc-head-image" alt="E-Learning"/> 
                                          </div>
                                          <div className="sub_heading">
                                                <p>Look into yourself, get something in return as your achivement.</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-12">
                                          <div class="row">
                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>

                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>

                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>

                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>

                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>

                                                <div className="why-choose-area col-lg-4 col-md-2 col-12 mb-3">
                                                      <div className="wc-area-img">
                                                            <img src="/hero1.jpg" className="img-fluid" alt="E-Learning"/> 
                                                      </div>
                                                      <div className="wc-heading">
                                                            <h4 className="title-dark">Couse Accessinility</h4>
                                                      </div>
                                                      <div className="">
                                                            <p>Select a suitable course from the vast area of other course. </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                        <section className="sec-padding pt-0">
                              <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12 text-center mb-3">
                                          <div className="sec-heading">
                                                <h2 className="head title-dark">Our Mentors</h2>
                                                {/* <h2 className="head title-red">E-Learning </h2> */}
                                          </div>
                                          <div className="sub_heading">
                                                <p>Look into yourself, get something in return as your achivement.</p>
                                          </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                          <div className="mentor-area">
                                                <div className="mentor_part">
                                                      <div className="menort_Img">
                                                            <img src="/hero1.jpg" alt="MERN Academy Mentor"/>
                                                      </div>
                                                      <div className="mentor_details">
                                                            <div className="mentor_name">
                                                                  <h4>Rohit Singh</h4>
                                                            </div>
                                                            <div className="mentor_course">
                                                                  <ul>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                  </ul>
                                                            </div>
                                                            <div className="mentor_btn">
                                                                  <Button className="web-btn" href="/" >View Profile</Button> {' '} 
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                          <div className="mentor-area">
                                                <div className="mentor_part">
                                                      <div className="menort_Img">
                                                            <img src="/hero1.jpg" alt="MERN Academy Mentor"/>
                                                      </div>
                                                      <div className="mentor_details">
                                                            <div className="mentor_name">
                                                                  <h4>Rohit Singh</h4>
                                                            </div>
                                                            <div className="mentor_course">
                                                                  <ul>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                  </ul>
                                                            </div>
                                                            <div className="mentor_btn">
                                                                  <Button className="web-btn" href="/" >View Profile</Button> {' '} 
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                          <div className="mentor-area">
                                                <div className="mentor_part">
                                                      <div className="menort_Img">
                                                            <img src="/hero1.jpg" alt="MERN Academy Mentor"/>
                                                      </div>
                                                      <div className="mentor_details">
                                                            <div className="mentor_name">
                                                                  <h4>Rohit Singh</h4>
                                                            </div>
                                                            <div className="mentor_course">
                                                                  <ul>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                  </ul>
                                                            </div>
                                                            <div className="mentor_btn">
                                                                  <Button className="web-btn" href="/" >View Profile</Button> {' '} 
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                          <div className="mentor-area">
                                                <div className="mentor_part">
                                                      <div className="menort_Img">
                                                            <img src="/hero1.jpg" alt="MERN Academy Mentor"/>
                                                      </div>
                                                      <div className="mentor_details">
                                                            <div className="mentor_name">
                                                                  <h4>Rohit Singh</h4>
                                                            </div>
                                                            <div className="mentor_course">
                                                                  <ul>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                        <li>PHP</li>
                                                                  </ul>
                                                            </div>
                                                            <div className="mentor_btn">
                                                                  <Button className="web-btn" href="/" >View Profile</Button> {' '} 
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-12 text-center mt-5">
                                    <Button className="web-btn" href="/" >View All Mentors</Button> {' '} 
                              </div>
                        </section>
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
                        <section className="faq sec-padding">
                        <div className="col-lg-12 col-md-12 col-12 text-center mb-3">
                                          <div className="sec-heading">
                                                <h2 className="head title-dark">Friquenty Asked Qustion</h2>
                                                {/* <h2 className="head title-red">E-Learning </h2> */}
                                          </div>
                                          <div className="sub_heading">
                                                <p>Look into yourself, get something in return as your achivement.</p>
                                          </div>
                                    </div>
                              <div class="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                    <Accordion defaultActiveKey="0" flush>
                                          <Accordion.Item eventKey="0">
                                          <Accordion.Header>Accordion Item #1</Accordion.Header>
                                          <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                          </Accordion.Body>
                                          </Accordion.Item>
                                          <Accordion.Item eventKey="1">
                                          <Accordion.Header>Accordion Item #2</Accordion.Header>
                                          <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                          </Accordion.Body>
                                          </Accordion.Item>
                                          </Accordion>
                                    </div>
                              </div>
                        </section>
                  </div>
                  <hr/>
                  <footer>
                        <div className="footer text-center p-2">
                              <h6>Copyright ©2021 MERN Academy. All Rights Reserved by MERN Academy</h6>
                        </div>
                  </footer>
            </div>
      )
}
