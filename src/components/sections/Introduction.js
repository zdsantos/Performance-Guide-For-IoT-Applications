import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import HowToUse from './partials/HowToUse';
import About from './partials/About';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Introduction = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: "Introduction"
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <SectionHeader data={sectionHeader} className="center-content" />
        <div className={innerClasses}>
          <div className={splitClasses}>
          <p>In this wiki a performance testing guide for IoT is provided. The guide divides performance into 3 subcharacteristics, based on ISO 25010, namely, Temporal Behavior - is the level to which the response and processing time and transfer rates of a product or system, when performing its functions, meet the requirements, Resource Utilization - is the degree to which the quantities and types of resources used by a product or system, when performing their functions, meet the requirements, and Capacity - it is the degree to which the maximum limits of a product or system parameter meet the requirements. The guide aims to assist in performance testing of IoT applications by providing at the end of the process a test plan template.</p>
            {/* <About id="about" shadow />
            <HowToUse id="how-to-use" shadow /> */}
            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <About id="about" shadow />
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <HowToUse id="how-to-use" shadow />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

Introduction.propTypes = propTypes;
Introduction.defaultProps = defaultProps;

export default Introduction;