import { exception } from "react-ga";
import { guideContent, tools } from '../models/guide-content-base';
import React from 'react';
import Latex from 'react-latex';

class ReportService {
    
    constructor() {
        this._Data = guideContent;
        this._Tools = tools;
    }

    // public methods
    addItem(item) {
        if (item["id"] === undefined) throw exception();
        if (item["type"] === undefined) throw exception();

        if (item["type"] === "tools") return this._addTool(item);

        let caracteristic = this._Data.find(i => i.id === item.characteristics);
        var selectedItem = caracteristic[item.type].find(i => i.id === item.id);

        selectedItem.selected = true;
        console.log('ReportService', `add: ${item.id}`)

        // check dependents, if active the trigged send the list
        this._checkDependentsTrigger(item);
    }

    removeItem(item) {
        if (item["id"] === undefined) throw exception();
        if (item["type"] === undefined) throw exception();

        if (item["type"] === "tools") return this._removeTool(item);

        let caracteristic = this._Data.find(i => i.id === item.characteristics);
        var selectedItem = caracteristic[item.type].find(i => i.id === item.id);
        
        selectedItem.selected = false;
        console.log('ReportService', `remove: ${item.id}`);
    }

    getAllItens() {
        return this._Data;
    }

    getTools() {
        return this._Tools;
    }

    generateReport() {
        return <div class="report">
            <div class="header">
                <div class="container">
                    <h1>Test Plan Template</h1>
                </div>
            </div>
            {this._createCaracteristicSection()}
            {this._createToolsSection()}
        </div>;
    }

    // private methods
    _createCaracteristicSection() {
        var caracteristicsList = this._Data.filter(c => this._checkIsUsedCaracteristic(c));

        if (caracteristicsList.length > 0 ){
            return (<div class="container">
                {
                    caracteristicsList.map(this._printCaracteristic, this)
                }
            </div>);
        } else {
            return;
        }
    }

    _createToolsSection() {
        var toolsList = this._Tools.filter(t => t.selected);

        if (toolsList.length > 0) {
            return (<div class="container">
                <h2>Tools</h2>
                {toolsList.map(this._printItem)}
            </div>);
        } else {
            return;
        }
    }

    _printCaracteristic(caracteristic) {
        let propertiesList = caracteristic.properties.filter(i => i.selected);
        let testCasesList = caracteristic.testCases.filter(i => i.selected);
        let metricsList = caracteristic.metrics.filter(i => i.selected);
        
        return (<div>
            <h2>{caracteristic.name}</h2>
            <h3>Properties</h3>
            {propertiesList.map(this._printItem, this)}
            <h3>Test Cases</h3>
            {testCasesList.map(this._printItem, this)}
            <h3>Metrics</h3>
            {metricsList.map(this._printItem, this)}
        </div>);
    }

    _printItem(data) {
        if (data.type === "testCases") {
            return (
                <div class="item">
                    <h4>{data.title}</h4>
                    <p><span class="property-title">Test Evironment:</span> {data.testEnvironment}</p>
                    <p><span class="property-title">Pre-Conditions:</span> {data.preConditions}</p>
                    <p><span class="property-title">Step-by-step:</span>
                    <ol class="stepsList">
                        {data.steps.map(this._buildStepsListItem)}
                    </ol>
                    </p>
                    <p><span class="property-title">Post-Conditions:</span> {data.postConditions}</p>
                </div>
            );
        } else if (data.type === "metrics") {
            return (
                <div class="item">
                    <h4>{data.title}</h4>
                    <p><span class="property-title">Purpose:</span> {data.purpose}</p>
                    <p><span class="property-title">Method:</span> {data.method}</p>
                    <p><span class="property-title">Measure:</span>
                    <ul class="stepsList">
                        {data.measure.map(this._buildStepsListItem)}
                    </ul>
                    </p>
                </div>
            );
        } else if (data.type === "properties") {
            return (
                <div class="item">
                    <h4>{data.title}</h4>
                    <p><span class="property-title">Description:</span> {data.description}</p>
                </div>
            );
        } else {
            return (
                <div class="item">
                    <h4>{data.title}</h4>
                    <p><span class="property-title">Description:</span> {data.description}</p>
                    <p><span class="property-title">License:</span> {data.license}</p>
                    <p><span class="property-title">Link:</span> <a href={data.link} target="blank">{data.link}</a></p>
                </div>
            );
        }
    }

    _buildStepsListItem(step) {
        return (<li key={step}><Latex>{step}</Latex></li>)
    };

    _checkIsUsedCaracteristic(caracteristic) {
        let hasProperties = false;
        let hasMetrics = false;
        let hasTestCases = false;

        if (caracteristic.properties.find(p => p.selected))
            hasProperties = true;
        if (caracteristic.metrics.find(p => p.selected))
            hasMetrics = true;
        if (caracteristic.testCases.find(p => p.selected))
            hasTestCases = true;

        return hasProperties && hasMetrics && hasTestCases;
    }

    _addTool(tool) {
        var selectedTool = this._Tools.find(i => i.id === tool.id);
        selectedTool.selected = true;
        console.log('ReportService', `add: ${tool.id}`);

        return [];
    }

    _removeTool(tool) {
        var selectedTool = this._Tools.find(i => i.id === tool.id);
        selectedTool.selected = false;
        console.log('ReportService', `remove: ${tool.id}`)
    }

    _checkDependentsTrigger(item) {
        if (item.dependents && item.dependents.length > 0) {
            let dependents = item.dependents.map(id => this.getItemById(id));
            dependents.forEach(d => this.addItem(d));
        }
    }

    getItemById(id) {
        var currentList = this._Data;

        while(currentList.length !== 0) {
            let item = currentList[0];

            if (item.id === id) return item;

            if (item.properties && item.properties.length > 0) currentList = currentList.concat(item.properties);
            if (item.testCases && item.testCases.length > 0) currentList = currentList.concat(item.testCases);
            if (item.metrics && item.metrics.length > 0) currentList = currentList.concat(item.metrics);

            currentList.shift();
        }
    }
}

export default new ReportService();