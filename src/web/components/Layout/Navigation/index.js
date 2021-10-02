import React from 'react'
import {   } from 'react-router-dom'
import {Nav,Button} from 'react-bootstrap'

import TopMenu from '../TopMenu'
import './index.css'

export default function Navigation() {
      return (
          
            <>
            <div className="container-fluid fix-header">
                <div class="container">
                    <header id="header">
                        {/* <TopMenu /> */}
                        <nav className="main-navigation">
                            <div className="header-main">
                                <div className="row  no-gutters">
                                    <div className="col-lg-3 col-md-12 col-12 p-0">
                                        <div className="web-logo">
                                            <img src="/NewLogo.jpg" className="img-fluid" alt="MERN Acadmey Logo"/> 
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 d-flex align-item-center justify-content-center">
                                        <Nav activeKey="/home" >
                                            <Nav.Item>
                                                <Nav.Link className="head-item active" href="/">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="head-item" href="/">Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="head-item" href="/">Learning Path</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-12 p-0 d-flex align-item-center justify-content-end">
                                        <div className="header-side-btn">
                                            <Button className="web-btn" href="/login" >Login</Button> {' '}
                                            <Button className="web-btn" href="/register" >Register</Button> {' '}
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </nav>
                
                    </header>

                </div>
            </div>
        </>
      )
}
