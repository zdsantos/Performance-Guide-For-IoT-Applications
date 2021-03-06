import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    tag: PropTypes.elementType,
    color: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    wide: PropTypes.bool,
    wideMobile: PropTypes.bool,
    disabled: PropTypes.bool
  }
  
  const defaultProps = {
    tag: 'tab',
    color: '',
    size: '',
    loading: false,
    wide: false,
    wideMobile: false,
    disabled: false
  }

const Tab = (props) => {

    const { className, label, isActive, onClick } = props;
  
    const tabClass = `tabs__tab ${className}`;
    const linkClass = isActive ? 'tabs__tab-link--active' : 'tabs__tab-link';
  
    return (
        <li className={tabClass}>
            <a className={linkClass} onClick={onClick}>{label}</a>
        </li>
    );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default Tab;