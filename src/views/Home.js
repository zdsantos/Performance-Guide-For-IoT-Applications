import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Guide from '../components/sections/Guide';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Introduction hasBgColor />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <FeaturesTiles /> */}
      {/* <Testimonial topDivider /> */}
      <Guide id="guide" />
      {/* <Cta id="suggestions" split /> */}
    </>
  );
}

export default Home;