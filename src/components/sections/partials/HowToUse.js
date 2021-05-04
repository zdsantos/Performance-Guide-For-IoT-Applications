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
                        <p>The guide aims to assist in performance testing of IoT applications in the context where there are sensors and actuators and an application that performs the management of these smart objects over the network. There are 4 steps to the test plan at the end, the initial 3 being mandatory and the last one optional. The first step is the selection of properties, in which properties and their definitions are presented, these properties characterize each of the performance subcharacteristics. After the selection of properties, the next step is the selection of abstract test cases that will depend on which subcharacteristics were contemplated in the selection of properties, the third step is the selection of metrics that will depend on which properties were selected and finally the suggestion of tools that can help in the collection of selected metrics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

HowToUse.propsTypes = propTypes;
HowToUse.defaultProps = defaultProps;

export default HowToUse;