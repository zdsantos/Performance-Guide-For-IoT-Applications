import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { useForm } from 'react-hook-form';
import notificationService from '../../../services/notificationService';
import reportService from '../../../services/reportService';
import TimeSpentInput from '../../elements/TimeSpentInput';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const CostBenefit = ({
    className,
    ...props
}) => {
    const { register, watch } = useForm();
    const [costBenefitCalculated, setCostBenefitCalculated] = useState(reportService.CostBenefit !== null);
    const [hasAllInformations, setHasAllInformations] = useState(false);
    const timeValues = {};
    const hourValue = watch('hourValue', reportService._HourValue) || "";;

    const inputName = (item) => {
        return `${item.id}-time`;
    }

    reportService.getSelectedTestCases().forEach(t => {
        timeValues[t.id] = watch(inputName(t), t['timeSpent']) || "";
    });

    reportService.getSelectedMetrics().forEach(t => {
        timeValues[t.id] = watch(inputName(t), t['timeSpent']) || "";
    });

    useEffect(() => {
        if (reportService.getSelectedTestCases().length === 0 || reportService.getSelectedMetrics().length === 0) {
            notificationService.showInfo('At least one correlation, one test case, and one metric must be selected.');
            setHasAllInformations(false);
        } else {
            setHasAllInformations(true);
        }
    }, []);

    const outerClasses = classNames(
        'cost-benefit',
        className
    );

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(timeValues);

        var loadingId = notificationService.showInfo("Calculating...");
        let hasError = false;

        Object.entries(timeValues).forEach(tv => {
            if (tv[1] === '')
                hasError = true;
        });
        if (hasError) {
            notificationService.showError("All time values must be filled.");
        }

        
        if (!hasError) {
            reportService.setTimeSpentValues(timeValues);
            var costBenefitresult = reportService.calcCostBenefit(hourValue, timeValues);
            setCostBenefitCalculated(true);
            console.log(costBenefitresult);
        }
        
        notificationService.dismiss(loadingId);
    }

    const renderResult = () => {
        var text = reportService.getCostBenefitGroupDescription();
        return <div className="costbenefit-result">
            <span>Impact: {reportService.CostBenefit.impact}</span><br />
            <span>Effort: {reportService.CostBenefit.effort}</span><br />
            <p>{text}</p>
        </div>
    }

    const renderTimeSpentInput = (item) => {
        return <TimeSpentInput itemId={item.id} value={item['timeSpent']} {...register(inputName(item), { required: true })}></TimeSpentInput>
    }

    const renderTestCasesInputs = () => {
        if (reportService.getSelectedTestCases().length > 0) {
            return (<>
                <h3>Test Cases</h3>
                <div className="timespent-input-group">
                    {reportService.getSelectedTestCases().map(renderTimeSpentInput)}
                </div>
            </>);
        } else {
            return <></>;
        }
    }

    const renderMetricsInputs = () => {
        if (reportService.getSelectedMetrics().length > 0) {
            return (<>
                <h3>Metrics</h3>
                <div className="timespent-input-group">
                    {reportService.getSelectedMetrics().map(renderTimeSpentInput)}
                </div>
            </>);
        } else {
            return <></>;
        }
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <form id="contactForm" onSubmit={onSubmit}>
                    <Input className="mb-24" value={reportService._HourValue} name="hourValue" type="number" min="0" step=".01" label="Professional hour value" {...register("hourValue", { required: true })}></Input>
                    {/* <Input className="mb-24" value={reportService._TestDuration} name="testDuration" type="number" min="0" step=".01" label="Duration of tests" {...register("testDuration", { required: true })}></Input>
                    <Input className="mb-24" value={reportService._MetricsDuration} name="metricsDuration" type="number" min="0" step=".01" label="Duration of metrics" rows={5} {...register("metricsDuration", { required: true })}></Input> */}
                    {renderTestCasesInputs()}
                    {renderMetricsInputs()}
                    <ButtonGroup>
                        <Button type="submit" color="secondary" disabled={!hasAllInformations} wideMobile>Send</Button>
                    </ButtonGroup>
                </form>
                <div hidden={!costBenefitCalculated}>
                    {costBenefitCalculated ? renderResult() : <></>}
                </div>
            </div>
        </section>
    );
}

CostBenefit.propTypes = propTypes;
CostBenefit.defaultProps = defaultProps;

export default CostBenefit;