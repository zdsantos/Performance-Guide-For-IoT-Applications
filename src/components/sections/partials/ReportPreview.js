import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
// import ButtonGroup from '../../elements/ButtonGroup';
// import Button from '../../elements/Button';


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

    const outerClasses = classNames(
        'report-review',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'report-review-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
        title: "Report"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <p>Under construction...</p>
                    {/* <div className="container-xs">
                        <div className="reveal-from-bottom" data-reveal-delay="600">
                            <ButtonGroup>
                                <Button tag="a" color="primary" wideMobile>
                                    Download Report
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

ReportPreview.propsTypes = propTypes;
ReportPreview.defaultProps = defaultProps;

export default ReportPreview;