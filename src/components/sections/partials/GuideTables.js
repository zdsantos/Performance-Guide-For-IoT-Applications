import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GuideContentItem from '../../elements/GuideContentItem';
import GuideCaracteristcItem from '../../elements/GuideCaracteristcItem';
import CostBenefit from '../../sections/partials/CostBenefit';
import ReportService from '../../../services/reportService';
import IotCharacteristic from '../../elements/IotCharacteristics';

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

    const [update, setUpdate] = useState(true);

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

    const renderGuideCaracteristcDefinitions = (item) => {
        return (<GuideCaracteristcItem key={item.id} data={item} property="definitions" addAction={addItem} removeAction={removeItem} bottomOuterDivider />)
    }

    const renderIoTCharacteristics = (item) => {
        return (<IotCharacteristic data={item}></IotCharacteristic>)
    }

    const addItem = (item) => {
        return ReportService.addItem(item);
        // dependents.forEach(d => {
        //    addItem(d);
        // });
    }

    const removeItem = (item) => {
        ReportService.removeItem(item);
    }

    ReportService.Update = () => {
        setUpdate(update);
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
                            <Tab>Caracteristc</Tab>
                            <Tab>Characteristcs Correlations</Tab>
                            <Tab>Subcharacteristics</Tab>
                            <Tab>Properties</Tab>
                            <Tab>Abstract Test Cases</Tab>
                            <Tab>Metrics</Tab>
                            <Tab>Cost Benefit</Tab>
                            <Tab>Suggested Tools</Tab>
                        </TabList>

                        <TabPanel> {/* Performance Definitions */}
                            <ul className="tab-panel-inner">
                                {ReportService.getDefinitions().map(renderGuideCaracteristcDefinitions)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Impact */}
                            <p className="alert" style={{ color: '#25282C' }}>Based on literature searches 18 IoT characteristics were identified that relate to performance. These characteristics are listed below along with their definitions. The characteristics that are present and important in the application to be evaluated should be selected. The number of selected characteristics will be used in the Cost Benefit calculation step.</p>
                            <ul>
                                {ReportService.getIoTCharacteristics().map(renderIoTCharacteristics)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Subcharacteristics */}
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideContentItem)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Properties */}
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcProperties)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Abstract Test Cases */}
                            <p className="alert">It is recommended that test cases that have been preselected by properties remain selected. Otherwise, test completeness is not guaranteed.</p>
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcTestCases)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Metrics */}
                            <p className="alert">It is recommended that metrics that have been preselected by properties remain selected. Otherwise, measurement completeness is not guaranteed.</p>
                            <ul className="tab-panel-inner">
                                {ReportService.getAllItens().map(renderGuideCaracteristcMetrics)}
                            </ul>
                        </TabPanel>
                        <TabPanel> {/* Cost Benefit */}
                            <CostBenefit></CostBenefit>
                        </TabPanel>
                        <TabPanel> {/* Suggested Tools */}
                            <p className="alert">It is suggested tools for collecting metrics, could be unselected. It's use is not mandatory.</p>
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