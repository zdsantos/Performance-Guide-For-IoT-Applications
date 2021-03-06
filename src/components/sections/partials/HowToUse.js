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

const HowToUse = ({
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
        'how-to-use',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'how-to-use-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        shadow && 'shadow'
    );

    // const tilesClasses = classNames(
    //     'tiles-wrap center-content',
    //     pushLeft && 'push-left'
    // );

    const sectionHeader = {
        title: "How To Use"
    };
    
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <h3 className="header center-content">How To Use</h3>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui nec augue faucibus vulputate. Vestibulum sit amet nibh in augue eleifend sagittis. Nullam vitae nibh vitae urna commodo posuere. Vestibulum vehicula erat a diam vestibulum, sit amet consectetur dui posuere. Nunc imperdiet varius turpis. Nulla egestas sodales lobortis. Nulla ut scelerisque sem, ut pulvinar odio. Morbi a commodo orci. Vivamus eu tortor id ligula maximus congue.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

HowToUse.propsTypes = propTypes;
HowToUse.defaultProps = defaultProps;

export default HowToUse;