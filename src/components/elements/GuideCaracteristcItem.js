import React, { useState } from 'react';
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
    removeAction,
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
  
  const [selected] = useState(data.selected);
  const [selectedCount, setSelectedCount] = useState(data[property].filter(i => i.selected).length);
  const [impactedCount, setImpactedCount] = useState(data[property].filter(i => i.impacted).length);

  const classes = classNames(
    'guide-caracteristic-item',
    className,
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider'
  );

  const renderGuideContentItem = (item) => {
    return (<GuideContentItem key={item.id} data={item} addAction={updateCountAdd} removeAction={updateCountRemove} bottomOuterDivider />)
  }

  const updateCountAdd = (item) => {
    let resultOk = addAction(item);
    
    if (!resultOk) return false;

    let count = data[property].filter(i => i.selected).length;
    setSelectedCount(count);

    count = data[property].filter(i => i.impacted).length;
    setImpactedCount(count);
    return true;
  };

  const updateCountRemove = (item) => {
    removeAction(item);
    let count = data[property].filter(i => i.selected).length;
    setSelectedCount(count);
  };

  data["impactHandler"] = (item) => {
    var count = data[property].filter(i => i.impacted).length;
    setImpactedCount(count);
  }

  return (
    <li
      {...props}
      className={classes}
      key={data.name}
    >
      <div className="impactCounter" hidden={impactedCount === 0}>Impacted itens: ({impactedCount}/{data[property].length})</div>
      <Collapsible triggerTagName="div" trigger={`${data.name} - (${selectedCount}/${data[property].length})`} className={selected ? 'selected' : 'notselected'} easing="ease">
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