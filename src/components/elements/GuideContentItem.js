import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

const propTypes = {
    data: PropTypes.object,
    tag: PropTypes.elementType,
    color: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    wide: PropTypes.bool,
    wideMobile: PropTypes.bool,
    disabled: PropTypes.bool
}

const defaultProps = {
    data: null,
    tag: 'guide-content-item',
    color: '',
    size: '',
    loading: false,
    wide: false,
    wideMobile: false
}

const GuideContentItem = ({
    className,
    data,
    tag,
    color,
    size,
    loading,
    wide,
    wideMobile,
    ...props
}) => {

  const classes = classNames(
    'guide-content-item',
    className
  );

  const Component = tag;
  return (
    <li
      {...props}
      className={classes}
    >
      <div className="item-description">
        <h6>{data.title}</h6>
        <Button color="primary">Add</Button>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
    </li>
  );
}

GuideContentItem.propTypes = propTypes;
GuideContentItem.defaultProps = defaultProps;

export default GuideContentItem;