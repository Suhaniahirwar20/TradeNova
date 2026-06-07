import React from 'react'
import Hero from '../components/landingPage/Hero';
import WhyChoose from '../components/landingPage/WhyChoose';
import Features from '../components/landingPage/Features';
import Working from '../components/landingPage/Working';
import Testimonials from '../components/landingPage/Testimonials';
import CTA from '../components/common/CTA';

const Landing = () => {
  return (
    <div>
      <Hero/>
      <WhyChoose/>
      <Features/>
      <Working/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Landing