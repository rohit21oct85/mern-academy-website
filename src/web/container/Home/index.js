import React from 'react'
import Navigation from '../../components/Layout/Navigation'
import {Button} from 'react-bootstrap'
import './index.css';

export default function Home() {
      return (
            <div>
                  <div className="container">
                        <Navigation />
                        <section className="hero-section sec-padding">
                              <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                          <div class="hero-content">
                                                <div class="hero-title">
                                                      <h1 className="hero-title-dark">Investing in</h1>
                                                      <h1 className="hero-title-dark">Knowledge and </h1>
                                                      <h1 className="hero-title-red">Your future</h1>
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
                                                <img src="/hero1.jpg" className="img-fluid"/> 
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>
            </div>
      )
}
