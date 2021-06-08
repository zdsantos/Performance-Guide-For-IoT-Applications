import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import GuideTables from './partials/GuideTables';
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Guide = ({
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
        'guide',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'guide-inner section-inner',
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
        title: "IoT Testing Guide"
    };

    return (
        <section
            {...props}
            className={outerClasses}
            name='guide'
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <GuideTables />
                    {/* <div className={splitClasses}>
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                            </div>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                            </div>
                        </div>
                    </div> */}
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </section>
    );
};

Guide.propsTypes = propTypes;
Guide.defaultProps = defaultProps;

export default Guide;