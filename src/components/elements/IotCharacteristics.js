import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReportService from '../../services/reportService'

const propTypes = {
    data: PropTypes.object,
    size: PropTypes.string,
    wide: PropTypes.bool,
    wideMobile: PropTypes.bool,
}

const defaultProps = {
    data: null,
    tag: 'iot-characteristics',
    size: '',
    wide: false,
    wideMobile: false
}

const IotCharacteristic = ({
    className,
    data,
    tag,
    size,
    wide,
    wideMobile,
    ...props
}) => {
    const [selected, setSelected] = useState(data.selected)

    const handleChange = (event) => {
        if (selected) {
            ReportService._removeGeneric(data);
        } else {
            ReportService._addGeneric(data);
        }

        setSelected(!selected);
    }

    const classes = classNames(
        'iot-characteristics',
        className,
    );

    return (
        <div className={classes}>
            <label>
                <input className="checkbox" type="checkbox" checked={selected} onChange={handleChange}></input>
                <p><span>{data.name}</span> - {data.definition}</p>
            </label>
        </div>
    );
}

IotCharacteristic.propTypes = propTypes;
IotCharacteristic.defaultProps = defaultProps;

export default IotCharacteristic;