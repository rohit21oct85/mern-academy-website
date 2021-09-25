import React from 'react'
import {   } from 'react-router-dom'
import {Nav,Button} from 'react-bootstrap'

import TopMenu from '../TopMenu'
import './index.css'

export default function Navigation() {
      return (
            <>
            <header id="header">
                
                {/* <TopMenu /> */}
                <nav classNameName="main-navigation">
                    <div className="header-main">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-12">
                                <div className="web-logo">
                                    <img src="/logo.png" className="img-fluid"/> 
                                </div>
                                
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 align-item-center jusify-content-center">
                                <Nav activeKey="/home" >
                                    <Nav.Item>
                                        <Nav.Link className="head-item" href="/">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="head-item" href="/">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="head-item" href="/">Test</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="head-item" href="/">Test</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                            </div>
                            <div className="col-lg-3 col-md-12 col-12">
                                <div className="header-side-btn">
                                    <Button className="web-btn" href="/login" >Login</Button> {' '}
                                    <Button className="web-btn" href="/register" >Register</Button> {' '}
                                </div>  
                            </div>
                        </div>
                    </div>
                </nav>
         
            </header>
        </>
      )
}
