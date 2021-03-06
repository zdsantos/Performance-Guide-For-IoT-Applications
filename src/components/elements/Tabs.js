import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tab from './Tab';

class Tabs extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: props.defaultActiveIndex || 0 };
    }
  
    handleTabClick = (tabIndex) => {
      if (tabIndex !== this.state.activeIndex) {
        this.setState({ activeIndex: tabIndex });
      }
    }
  
    cloneTabElement = (tab, index = 0) => {
      const { activeIndex } = this.state;
  
      return (
        cloneElement(tab, {
          onClick: () => this.handleTabClick(index),
          tabIndex: index,
          isActive: index === activeIndex,
        })
      );
    }
  
    renderChildrenTabs = () => {
      const { children } = this.props;
  
      if (!Array.isArray(children)) {
        return this.cloneTabElement(children);
      }
  
      return children.map(this.cloneTabElement);
    }
  
    renderChildrenTabs = () => {
      const { children } = this.props;
      const { activeIndex } = this.state;
  
      if (children[activeIndex]) {
        return children[activeIndex].props.children;
      }
  
      return children.props.children;
    }
  
    render() {
      const { className } = this.props;
     
      return (
        <section className={`tabs ${className}`}>
          <ul className={'tabs__list'}>
            {this.renderChildrenTabs()}
          </ul>
          <div className={'tabs__content'}>
            {this.renderActiveTabContent()}
          </div>
        </section>
      );
    }
  };

  Tabs.Tab = Tab;

  export default Tabs;