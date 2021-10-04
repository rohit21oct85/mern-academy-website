import React from 'react'

import './index.css';
import Navigation from '../../components/Layout/Navigation';
import HeroSection from 'web/components/Home/HeroSection';
import WhyChooseUs from 'web/components/Home/WhyChooseUs';
import Mentor from 'web/components/Home/Mentor';
import Testimonials from 'web/components/Home/Testimonials';
import FAQ from 'web/components/Home/FAQ';

export default function Home() {
      return (
            <div>
                  <Navigation />
                  <div className="container">  
                        <HeroSection />
                        
                        <WhyChooseUs />
                        <Mentor />
                        <Testimonials />
                        <FAQ />
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
