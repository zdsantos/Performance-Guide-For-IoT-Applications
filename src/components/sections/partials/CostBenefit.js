import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Input from '../../elements/Input';
import Image from '../../elements/Image';
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
    const [useDefaultTimes, setUseDefaultTimes] = useState(reportService.UseDefaultTimes)
    const [useDefaultHourlyWage, setUseDefaultHourlyWage] = useState(reportService.UseDefaultHourlyWage)
    const hourly = reportService._HourValue ? reportService._HourValue : reportService.DefaultHourlyWage;
    const timeValues = {};
    const hourValue = watch('hourValue', reportService._HourValue) || "";;

    const handleTimesChange = (e) => {
        setUseDefaultTimes(e.target.checked);
        reportService.changeUseDefaultTimes(e.target.checked);
    }

    const handleHourlyChange = (e) => {
        setUseDefaultHourlyWage(e.target.checked);
        reportService.changeUseDefaultHourlyWage(e.target.checked);
    }

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
            setCostBenefitCalculated(false);
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

        if (!useDefaultTimes) {
            Object.entries(timeValues).forEach(tv => {
                if (tv[1] === '') {
                    tv[1] = reportService.getItemById(tv[0])['timeSpentDefault'];
                }
            });
            if (hasError) {
                notificationService.showError("All time values must be filled.");
            }
        }
        
        if (!useDefaultHourlyWage) {
            if (hourValue === "" || hourValue === 0) {
                hasError = true;
                notificationService.showError("Hourly wage must be entered and should be different from zero.");
            }
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
            <div>
                <span>Impact: {reportService.CostBenefit.impact.toFixed(2)}</span><br />
                <span>Effort: {reportService.CostBenefit.effort.toFixed(2)}</span><br />
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
            <Image alt="Archteture flow" src={require('../../../assets/images/groups.png')}></Image>
        </div>
    }

    const renderTimeSpentInput = (item) => {
        return <TimeSpentInput itemId={item.id} disabled={useDefaultTimes} value={item['timeSpent']} placeholder={item['timeSpentDefault']} {...register(inputName(item), { required: true })}></TimeSpentInput>
    }

    const renderTestCasesInputs = () => {
        if (reportService.getSelectedTestCases().length > 0) {
            return (<>
                <h4>Test Cases</h4>
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
                <h4>Metrics</h4>
                <div className="timespent-input-group">
                    {reportService.getSelectedMetrics().map(renderTimeSpentInput)}
                </div>
            </>);
        } else {
            return <></>;
        }
    }

    // const reset = () => {
    //     reportService.resetCostBenefit();
    //     notificationService.showSucess("The cost/benefit data was reset.")
    // }
    
    // reportService.UpdateCostBenefit = () => {
    //     setCostBenefitCalculated(reportService.CostBenefit !== null);
    //     setUseDefaultTimes(true);
    //     setUseDefaultHourlyWage(true);
    //     hourly = reportService._HourValue ? reportService._HourValue : reportService.DefaultHourlyWage;
    // }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <p>The cost benefit provides insight into how high a priority it is to run the selected test cases and metrics. The calculation is based on the hourly value of the tester, the quantities of selected features in correlations, and the time to execute each test and metric.</p>
                <p className="info">* Average hourly wage of a North American "Tester" in the year 2021. <br />
**The suggested time value of metrics and test cases is based on an execution performed by an experienced Tester on an application that has 2 sensors and 1 actuator and did not use any tools in the process.</p>
                
                <form id="contactForm">
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" checked={useDefaultHourlyWage} onChange={handleHourlyChange}></input>
                            <p>Use suggested hourly wage* ($18/hour)</p>
                        </label>
                    </div>
                    <>
                        {useDefaultHourlyWage ? <Input value={hourly} disabled={useDefaultHourlyWage} name="hourValue" type="number" min="0" step=".01" label="Professional hour value" hint="in dollars per hour"></Input>
                            : <Input value={hourly} disabled={useDefaultHourlyWage} name="hourValue" type="number" min="0" step=".01" label="Professional hour value" hint="in dollars per hour" {...register("hourValue", { required: true })}></Input>
                        }
                    </>
                    {/* <Input value={hourly} disabled={useDefaultHourlyWage} name="hourValue" type="number" min="0" step=".01" label="Professional hour value" hint="in dollars per hour" {...register("hourValue", { required: true })}></Input> */}
                    <div>
                        <label>
                            <input className="checkbox" type="checkbox" checked={useDefaultTimes} onChange={handleTimesChange}></input>
                            <p>Use suggested times for test cases and metrics**</p>
                        </label>
                    </div>
                    {renderTestCasesInputs()}
                    {renderMetricsInputs()}
                    <ButtonGroup>
                        {/* <Button color="danger" disabled={!hasAllInformations} onClick={reset}>Reset</Button> */}
                        <Button type="submit" color="secondary" disabled={!hasAllInformations} onClick={onSubmit}>Calculate</Button>
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