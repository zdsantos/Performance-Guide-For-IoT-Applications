import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import ReactToPrint from "react-to-print";
import ReportService from '../../../services/reportService';
import PrintService from '../../../services/printService';
import notificationService from '../../../services/notificationService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
        title: "Test Plan"
    };

    var reportComponentRef = "";

    const generateReport = () => {
        setReportComponent(PrintService.generateReport())
        setReportGenerated(true);
    }

    const showResetConfirm = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='modal-confirm'>
                    <h1>Are you sure?</h1>
                    <p>You want to clean all informations?</p>
                    <ButtonGroup>
                        <Button color="dark" wideMobile onClick={() => onClose()}>No</Button>
                        <Button color="danger" wideMobile onClick={() => { reset(); onClose(); }}>Yes, clean all</Button>
                    </ButtonGroup>
                  </div>
                );
              }
        });
    }

    const reset = () => {
        ReportService.reset();
        setReportGenerated(false);
        notificationService.showSucess("The guide was reset, all informations was cleaned.")
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className="content">
                        <div className="container-xs">
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button color="danger" wideMobile onClick={() => showResetConfirm()}>Reset</Button>
                                    <Button color="primary" wideMobile onClick={() => generateReport()}>Generate Test Plan</Button>
                                </ButtonGroup>
                            </div>
                            <div className="report-content m-32" ref={(el) => (reportComponentRef = el)} hidden={!reportGenerated}>{reportComponent}</div>
                            <div className="reveal-from-bottom" data-reveal-delay="600" hidden={!reportGenerated}>
                                <ButtonGroup>
                                    <ReactToPrint
                                        trigger={() => <Button color="secondary" wideMobile>Download</Button>}
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