import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Guide from '../components/sections/Guide';
import About from '../components/sections/About';
import Slider from '../components/sections/Slider';
import Environment from '../components/sections/Environment';
import Cta from '../components/sections/Cta';
import ReportPreview from '../components/sections/partials/ReportPreview';
import { ToastContainer } from 'react-toastify';

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
      <Environment hasBgColor />
      <Guide id="guide" hasBgColor />
      <ReportPreview hasBgColor />
      <Cta id="suggestions" />
      <ToastContainer />
    </>
  );
}

export default Home;