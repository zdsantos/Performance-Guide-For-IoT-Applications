import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import Collapsible from 'react-collapsible';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex';
import { FaPlus, FaTimes } from 'react-icons/fa';

const propTypes = {
    data: PropTypes.object,
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
    addAction: () => {},
    
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

  const [selected, setSelected] = useState(data.selected);
  const [impacted, setImpacted] = useState(data.impacted);
  
  const buildStepsListItem = (step) => {
    return (<li key={step}><Latex>{step}</Latex></li>)
  };

  const add = (item) => {
    let resultOk = addAction(item);
    if (resultOk) setSelected(!selected);
  }

  const remove = (item) => {
    removeAction(item);
    setSelected(!selected);
  }
  
  data["impactHander"] = (value) => {
    setImpacted(value);
  }

  const classes = classNames(
    'guide-content-item',
    className,
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider'
  );

  let actionButton;
  if (!selected) {
    actionButton = <Button color="secondary" wideMobile onClick={() => add(data)}><FaPlus /></Button>;
  } else {
    actionButton = <Button color="danger" wideMobile onClick={() => remove(data)}><FaTimes /></Button>;
  }
  
  let highlightClass = 'notselected';
  if (selected) {
    highlightClass = 'selected';
  } else if (impacted) {
    highlightClass = 'impacted';
  }

  if (data.type === "testCases") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={`${data.idLong} - ${data.title}`} easing="ease">
        <p><span className="property-title">Test Evironment:</span> {data.testEnvironment}</p>
        <p><span className="property-title">Pré-Conditions:</span> {data.preConditions}</p>
        <p><span className="property-title">Step-by-step:</span>
          <ol className="stepsList">
            {data.steps.map(buildStepsListItem)}
          </ol>
        </p>
        <p><span className="property-title">Post-Conditions:</span> {data.postConditions}</p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else if (data.type === "metrics") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={`${data.id} - ${data.title}`} easing="ease">
        <p><span className="property-title">Purpose:</span> {data.purpose}</p>
        <p><span className="property-title">Method:</span> {data.method}</p>
        <p><span className="property-title">Measure:</span>
          <ul className="stepsList">
            {data.measure.map(buildStepsListItem)}
          </ul>
        </p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else if (data.type === "properties") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={data.title} easing="ease">
        <p><span className="property-title">Description:</span> {data.description}</p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else if (data.type === "definitions") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={data.name} easing="ease">
        <p><span className="property-title">Definition:</span> {data.description}</p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else if (data.type === "subcharacteristics") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={data.name} easing="ease">
        <p><span className="property-title">Definition:</span> {data.description}</p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else if (data.type === "tools") {
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <Collapsible triggerTagName="div" className={highlightClass} trigger={data.title} easing="ease">
        <p><span className="property-title">Description:</span> {data.description}</p>
        <p><span className="property-title">License:</span> {data.license}</p>
        <p><span className="property-title">Link:</span> <a href={data.link} target="blank">{data.link}</a></p>
        <div className="item-description">
          {actionButton}
        </div>
      </Collapsible>
      </li>
    );
  } else {
    console.log('Unexpected item:', data);
    return (
      <li
        {...props}
        className={classes}
        key={data.id}
      >
      <p>Unexpected</p>
      </li>
    );
  }
}

GuideContentItem.propTypes = propTypes;
GuideContentItem.defaultProps = defaultProps;

export default GuideContentItem;