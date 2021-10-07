import React from 'react'

import './index.css';
import Navigation from '../../components/Layout/Navigation';
import HeroSection from 'web/components/Home/HeroSection';
import WhyLearnJavascript from 'web/components/Home/WhyLearnJavascript';
import WhyChooseUs from 'web/components/Home/WhyChooseUs';
import Mentor from 'web/components/Home/Mentor';
import Testimonials from 'web/components/Home/Testimonials';
import FAQ from 'web/components/Home/FAQ';
import Footer from 'web/components/Home/Footer';


export default function Home() {
      return (
            <div>
                  <Navigation />
                  <div className="container">  
                        <HeroSection />
                        <WhyLearnJavascript />
                        <WhyChooseUs />
                        <Mentor />
                        <Testimonials />
                        <FAQ />
                  </div>
                  <hr/>
                  <Footer />
            </div>
      )
}
