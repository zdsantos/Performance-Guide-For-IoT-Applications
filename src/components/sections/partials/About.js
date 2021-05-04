import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const About = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    shadow,
    ...props
}) => {

    const outerClasses = classNames(
        'about',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'about-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        shadow && 'shadow'
    );
    
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <h3 className="header center-content">About</h3>
                    <div className="content">
                        <p>In this wiki a performance testing guide for IoT is provided. The guide divides performance into 3 subcharacteristics, based on ISO 25010, namely, Temporal Behavior - is the level to which the response and processing time and transfer rates of a product or system, when performing its functions, meet the requirements, Resource Utilization - is the degree to which the quantities and types of resources used by a product or system, when performing their functions, meet the requirements, and Capacity - it is the degree to which the maximum limits of a product or system parameter meet the requirements. The guide aims to assist in performance testing of IoT applications by providing at the end of the process a test plan template.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.propsTypes = propTypes;
About.defaultProps = defaultProps;

export default About;