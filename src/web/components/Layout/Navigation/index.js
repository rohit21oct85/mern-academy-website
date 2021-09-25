import React from 'react'
import { Link } from 'react-router-dom'
import TopMenu from '../TopMenu'
import './index.css'

export default function Navigation() {
      return (
            <>
            <TopMenu />
            <nav className="main-navigation">
            
            <ul>
                   <li>
                    <Link to="/">Home</Link>
                </li>
                
            </ul>
            <img src="/logo.png" className="logo-menu"/>  
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>

        </nav>
        </>
      )
}
