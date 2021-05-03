import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GuideContentItem from '../../elements/GuideContentItem';
import GuideCaracteristcItem from '../../elements/GuideCaracteristcItem';
import ReportService from '../../../services/reportService';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const GuideTables = ({
    className,
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
        return (<GuideContentItem key={item.id} data={item} addAction={addItem} removeAction={removeItem} bottomOuterDivider />)
    }

    const renderGuideCaracteristcTestCases = (item) => {
        return (<GuideCaracteristcItem key={item.id} data={item} property="testCases" addAction={addItem} removeAction={removeItem} bottomOuterDivider />)
    }

    const renderGuideCaracteristcMetrics = (item) => {
        return (<GuideCaracteristcItem key={item.id} data={item} property="metrics" addAction={addItem} removeAction={removeItem} bottomOuterDivider />)
    }

    const renderGuideCaracteristcProperties = (item) => {
        return (<GuideCaracteristcItem key={item.id} data={item} property="properties" addAction={addItem} removeAction={removeItem} bottomOuterDivider />)
    }

    const addItem = (item) => {
        let dependents = ReportService.addItem(item);
        dependents.forEach(d => {
           addItem(d);
        });
    }

    const removeItem = (item) => {
        ReportService.removeItem(item);
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
                            <Tab>Properties</Tab>
                            <Tab>Abstract Test Cases</Tab>
                            <Tab>Metrics</Tab>
                            <Tab>Suggested Tools</Tab>
                        </TabList>

                        <TabPanel> {/* Properties */}
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcProperties)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Abstract Test Cases */}
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcTestCases)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Metrics */}
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcMetrics)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Suggested Tools */}
                            <ul className="tab-panel-inner">
                                {ReportService.getTools().map(renderGuideContentItem)}
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