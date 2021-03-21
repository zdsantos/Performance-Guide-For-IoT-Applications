import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapsible from 'react-collapsible';
import GuideContentItem from './GuideContentItem';

const propTypes = {
    data: PropTypes.object,
    property: PropTypes.string,
    addAction: PropTypes.func,
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
    property: '',
    addAction: () => {},
    
    tag: 'guide-caracteristic-item',
    color: '',
    size: '',
    loading: false,
    wide: false,
    wideMobile: false
}

const GuideCaracteristcItem = ({
    className,
    data,
    property,
    addAction,
    tag,
    color,
    size,
    loading,
    wide,
    wideMobile,
    topOuterDivider,
    bottomOuterDivider,
    ...props
}) => {

  const classes = classNames(
    'guide-caracteristic-item',
    className,
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider'
  );

  const renderGuideContentItem = (item) => {
    return (<GuideContentItem data={item} addAction={addAction} bottomOuterDivider />)
  }

  return (
    <li
      {...props}
      className={classes}
      key={data.name}
    >
      <Collapsible trigger={`${data.name}`}>
        <ul>
          {data[property].map(renderGuideContentItem)}
        </ul>    
      </Collapsible>
    </li>
  );
}

GuideCaracteristcItem.propTypes = propTypes;
GuideCaracteristcItem.defaultProps = defaultProps;

export default GuideCaracteristcItem;