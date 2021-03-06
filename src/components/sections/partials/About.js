import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from './SectionHeader';

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

    const sectionHeader = {
        title: "About"
    };
    
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <h3 className="header center-content">About</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui nec augue faucibus vulputate. Vestibulum sit amet nibh in augue eleifend sagittis. Nullam vitae nibh vitae urna commodo posuere. Vestibulum vehicula erat a diam vestibulum, sit amet consectetur dui posuere. Nunc imperdiet varius turpis. Nulla egestas sodales lobortis. Nulla ut scelerisque sem, ut pulvinar odio. Morbi a commodo orci. Vivamus eu tortor id ligula maximus congue.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.propsTypes = propTypes;
About.defaultProps = defaultProps;

export default About;