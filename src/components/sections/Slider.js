import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require('react-responsive-carousel').Carousel;

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Slider = ({
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
        'slider',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'slider-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    // const splitClasses = classNames(
    //     'split-wrap',
    //     invertMobile && 'invert-mobile',
    //     invertDesktop && 'invert-desktop',
    //     alignTop && 'align-top'
    // );

    const sectionHeader = {
        title: "How to Use"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <h4>The figures below show how to use the Performance Testing Guide for IoT Applications</h4>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                        <Carousel showArrows={true}>
                            <div>
                                <img alt="step 1" src={require('../../assets/images/steps_Prancheta 1.png')} />
                            </div>
                            <div>
                                <img alt="step 2" src={require('../../assets/images/steps_Prancheta 2.png')} />
                            </div>
                            <div>
                                <img alt="step 3" src={require('../../assets/images/steps_Prancheta 3.png')} />
                            </div>
                            <div>
                                <img alt="step 4" src={require('../../assets/images/steps_Prancheta 4.png')} />
                            </div>
                            <div>
                                <img alt="step 5" src={require('../../assets/images/steps_Prancheta 5.png')} />
                            </div>
                            <div>
                                <img alt="step 6" src={require('../../assets/images/steps_Prancheta 6.png')} />
                            </div>
                            <div>
                                <img alt="step 7" src={require('../../assets/images/steps_Prancheta 7.png')} />
                            </div>
                            <div>
                                <img alt="step 8" src={require('../../assets/images/steps_Prancheta 8.png')} />
                            </div>
                            <div>
                                <img alt="step 9" src={require('../../assets/images/steps_Prancheta 9.png')} />
                            </div>
                            <div>
                                <img alt="step 10" src={require('../../assets/images/steps_Prancheta 10.png')} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

Slider.propsTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;