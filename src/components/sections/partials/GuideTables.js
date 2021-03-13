import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SectionTilesProps } from '../../../utils/SectionProps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { guideContent, tools } from '../../../models/guide-content-base';
import 'react-tabs/style/react-tabs.css';
import GuideContentItem from '../../elements/GuideContentItem';
import GuideCaracteristcItem from '../../elements/GuideCaracteristcItem';

const propTypes = {
    newItem: PropTypes.func,
    ...SectionTilesProps.types
}

const defaultProps = {
    newItem: () => {},
    ...SectionTilesProps.defaults
}

const GuideTables = ({
    className,
    newItem,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'guide-tables',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'guide-tables-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const renderGuideContentItem = (item) => {
        return (<GuideContentItem data={item} addAction={addItem} bottomOuterDivider />)
    }

    const renderGuideCaracteristcTestCases = (item) => {
        return (<GuideCaracteristcItem data={item} property="testCases" addAction={addItem} bottomOuterDivider />)
    }

    const renderGuideCaracteristcMetrics = (item) => {
        return (<GuideCaracteristcItem data={item} property="metrics" addAction={addItem} bottomOuterDivider />)
    }

    const addItem = (item) => {
        newItem(item);
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <Tabs>
                        <TabList>
                            <Tab>Test Cases</Tab>
                            <Tab>Metrics</Tab>
                            <Tab>Tools</Tab>
                        </TabList>

                        <TabPanel>
                            <ul className="tab-panel-inner">
                                {guideContent.map(renderGuideCaracteristcTestCases)}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul className="tab-panel-inner">
                                {guideContent.map(renderGuideCaracteristcMetrics)}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul className="tab-panel-inner">
                                {tools.map(renderGuideContentItem)}
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

GuideTables.propsTypes = propTypes;
GuideTables.defaultProps = defaultProps;

export default GuideTables;