import React from 'react'
import {Accordion} from 'react-bootstrap'

export default function FAQ() {
      return (
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
      )
}
