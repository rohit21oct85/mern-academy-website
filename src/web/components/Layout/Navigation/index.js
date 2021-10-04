import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import {Nav,Button} from 'react-bootstrap'


import './index.css'

export default function Navigation() {
      const location = useLocation()  
      const path = location.pathname
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
                                            <Link to="/">
                                                <img src="/NewLogo.jpg" className="img-fluid" alt="MERN Acadmey Logo"/> 
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12 d-flex align-item-center justify-content-center">
                                        <Nav activeKey="/home" >
                                            <Nav.Item>
                                                <Nav.Link as={Link} className={`head-item ${path === "/" ? 'active': ''}`} to="/">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} className={`head-item ${path === "/pricing" ? 'active': ''}`} to="/pricing">Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} className={`head-item ${path === "/learning-path" ? 'active': ''}`} to="/learning-path">Learning Path</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-12 p-0 d-flex align-item-center justify-content-end">
                                        <div className="header-side-btn">
                                            <Link to="/login">
                                                <Button className="web-btn">Login</Button> {' '}
                                            </Link>
                                            <Link to="/register" >
                                                <Button className="web-btn" >Register</Button> {' '}
                                            </Link>
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
