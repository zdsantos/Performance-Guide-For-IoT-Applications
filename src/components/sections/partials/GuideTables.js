import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from './SectionHeader';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import guideContent from '../../../models/guide-content-base';
import 'react-tabs/style/react-tabs.css';
import GuideContentItem from '../../elements/GuideContentItem';

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
        return (<GuideContentItem data={item}/>)
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
                            <ul>
                                {guideContent.testCases.map(renderGuideContentItem)}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                {guideContent.metrics.map(renderGuideContentItem)}
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                {guideContent.tools.map(renderGuideContentItem)}
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