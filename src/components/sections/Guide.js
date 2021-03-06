import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import GuideTables from './partials/GuideTables';
import ReportPreview from './partials/ReportPreview';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );

    const sectionHeader = {
        title: "Guide"
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
                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <GuideTables />
                            </div>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <ReportPreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Guide.propsTypes = propTypes;
Guide.defaultProps = defaultProps;

export default Guide;