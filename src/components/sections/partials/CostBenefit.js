import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { useForm } from 'react-hook-form';
import notificationService from '../../../services/notificationService';

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

    const outerClasses = classNames(
        'cost-benefit',
        className
    );

    const hourValue = watch('hourValue') || "";
    const testDuration = watch('testDuration') || "";
    const metricsDuration = watch('metricsDuration') || "";

    const onSubmit = (e) => {
        e.preventDefault();

        var loadingId = notificationService.showInfo("Sending...");

        let hasError = false;

        if (hourValue === "") {
            notificationService.showError("Name is a required field.");
            hasError = true;
        }
        if (testDuration === "") {
            notificationService.showError("Email is a required field and must be valid.");
            hasError = true;
        }
        if (metricsDuration === "") {
            notificationService.showError("Message is a required field.");
            hasError = true;
        }
        
        if (!hasError) {
            
        } else {
            notificationService.dismiss(loadingId);
        }
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <form id="contactForm" onSubmit={onSubmit}>
                    <Input className="mb-24" name="hourValue" type="number" label="Professional hour value" {...register("hourValue", { required: true })}></Input>
                    <Input className="mb-24" name="testDuration" type="number" label="Duration of tests" {...register("testDuration", { required: true })}></Input>
                    <Input className="mb-24" name="metricsDuration" type="number" label="Duration of metrics" rows={5} {...register("metricsDuration", { required: true })}></Input>
                    <ButtonGroup>
                        <Button type="submit" color="secondary" wideMobile>Send</Button>
                    </ButtonGroup>
                </form>
            </div>
        </section>
    );
}

CostBenefit.propTypes = propTypes;
CostBenefit.defaultProps = defaultProps;

export default CostBenefit;