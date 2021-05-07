import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Guide from '../components/sections/Guide';
import About from '../components/sections/About';
import Slider from '../components/sections/Slider';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <About hasBgColor />
      <Slider />
      {/* <Introduction hasBgColor /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <FeaturesTiles /> */}
      {/* <Testimonial topDivider /> */}
      <Guide id="guide" />
      <Cta id="suggestions" />
    </>
  );
}

export default Home;