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
                        <p>This Wiki is under construction. The IoT Application Performance Testing Guide is composed of sections that seek to assist in conducting performance testing for Internet of Things.
Through the selection of abstract test cases, metrics, tools, properties among other sections, this wiki will generate a customized test plan according to the selections made in each section.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.propsTypes = propTypes;
About.defaultProps = defaultProps;

export default About;