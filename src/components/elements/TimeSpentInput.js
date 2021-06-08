import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from './Input';

const propTypes = {
    itemId: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
}

const defaultProps = {
    itemId: '',
    value: undefined,
    placeholder: ''
}

const TimeSpentInput = ({
    className,
    itemId,
    value,
    placeholder,
    ...props
}) => {

    const classes = classNames(
        'timespent-input',
        className
    )

    return (
        <div className={classes}>
            <Input className="mb-24" value={value} placeholder={placeholder} name={itemId} type="number" min="0" step=".01" label={itemId} hint="in minutes" {...props}></Input>
        </div>
    );
}

TimeSpentInput.propTypes = propTypes;
TimeSpentInput.defaultProps = defaultProps;

export default TimeSpentInput;