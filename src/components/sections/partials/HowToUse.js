import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';

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

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <h3 className="header center-content">How To Use</h3>
                    <div className="content">
                        <p>The artifact produced at the end of using this Wiki is a test plan according to the step-by-step to be followed.The sequence of steps to be used in the Wiki until this artifact is achieved is still under construction.  So far the sections abstract test cases, measurements and tool suggestions have been added, these are currently being filled in completely, the other sections are still being added.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

HowToUse.propsTypes = propTypes;
HowToUse.defaultProps = defaultProps;

export default HowToUse;