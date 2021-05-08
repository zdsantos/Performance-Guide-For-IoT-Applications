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
                                <img src={require('../../assets/images/features-split-image-01.png')} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={require('../../assets/images/features-split-image-02.png')} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src={require('../../assets/images/features-split-image-03.png')} />
                                <p className="legend">Legend 3</p>
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