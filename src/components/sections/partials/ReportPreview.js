import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import ReactToPrint from "react-to-print";
import ReportService from '../../../services/reportService';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const ReportPreview = ({
    reportItens,
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
    const [reportGenerated, setReportGenerated] = React.useState(false);
    const [reportComponent, setReportComponent] = React.useState(<div>empty</div>);

    const outerClasses = classNames(
        'report-preview',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'report-preview-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
        title: "Report"
    };

    var reportComponentRef = "";

    const generateReport = () => {
        setReportComponent(ReportService.generateReport())
        setReportGenerated(true);
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div class="content">
                        <div className="container-xs">
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button color="primary" wideMobile onClick={() => generateReport()}>Generate Report</Button>
                                </ButtonGroup>
                            </div>
                            <div className="report-content m-32" ref={(el) => (reportComponentRef = el)} hidden={!reportGenerated}>{reportComponent}</div>
                            <div className="reveal-from-bottom" data-reveal-delay="600" hidden={!reportGenerated}>
                                <ButtonGroup>
                                    <ReactToPrint
                                        trigger={() => <Button color="secondary" wideMobile>Print report!</Button>}
                                        content={() => reportComponentRef}
                                        documentTitle="test_plan"
                                    />
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ReportPreview.propsTypes = propTypes;
ReportPreview.defaultProps = defaultProps;

export default ReportPreview;