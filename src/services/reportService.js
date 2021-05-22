import { exception } from "react-ga";
import { guideContent, tools, characteristics, iotCharacteristics } from '../models/guide-content-base';
import React from 'react';
import Latex from 'react-latex';
import notificationService from "./notificationService";
import Enums from "../models/enums";

class ReportService {
    
    constructor() {
        this._Data = guideContent;
        this._Tools = tools;
        this._Characteristics = characteristics;
        this._IoTCharacteristics = iotCharacteristics;
    }

    // public methods
    addItem(item) {
        if (item["id"] === undefined) throw exception();
        if (item["type"] === undefined) throw exception();

        let canAddResult = this._checkAddValidation(item);

        if (canAddResult === 0) {
            if (item["type"] === "tools") return this._addGeneric(item);
            if (item["type"] === "definitions") return this._addGeneric(item);
            if (item["type"] === "subcharacteristics") return this._addGeneric(item);
    
            let caracteristic = this._Data.find(i => i.id === item.characteristics);
            var selectedItem = caracteristic[item.type].find(i => i.id === item.id);
    
            selectedItem.selected = true;
            console.log('ReportService', `add: ${item.id}`)
    
            // check dependents, if active the trigged send the list
            this._checkDependentsTrigger(item);
            let hasImpact = this._checkImpactTrigger(item);

            if (hasImpact)
                this._createNotificationAlert(item, Enums.AlertType.HasImpacts);

            return true;
        } else {
            this._createNotificationError(item, canAddResult);
            return false;
        }
    }

    addImpact(item) {
        if (item["id"] === undefined) throw exception();

        var impactedItem = this.getItemById(item.id);
        impactedItem.impacted = true;
        console.log('ReportService', `${item.id} was impacted`);

        if (item["impactHander"])
        {
            item["impactHander"](true);

            var caracteristic = this.getItemById(item.characteristics);
            if (caracteristic["impactHandler"]) caracteristic["impactHandler"](item);
        }
    }

    removeItem(item) {
        if (item["id"] === undefined) throw exception();
        if (item["type"] === undefined) throw exception();

        if (item["type"] === "tools") return this._removeGeneric(item);
        if (item["type"] === "definitions") return this._removeGeneric(item);
        if (item["type"] === "subcharacteristics") return this._removeGeneric(item);

        let caracteristic = this._Data.find(i => i.id === item.characteristics);
        var selectedItem = caracteristic[item.type].find(i => i.id === item.id);
        
        selectedItem.selected = false;
        console.log('ReportService', `remove: ${item.id}`);

        this._checkRemoveDependecies(item);
    }

    getAllItens() {
        return this._Data;
    }

    getTools() {
        return this._Tools;
    }

    getDefinitions() {
        return this._Characteristics;
    }

    getIoTCharacteristics() {
        return this._IoTCharacteristics;
    }

    generateReport() {
        return <div class="report">
            <div class="header">
                <div class="container">
                    <h1>Test Plan Template</h1>
                </div>
            </div>
            {this._createIntroductionSection()}
            <hr></hr>
            {this._createsubcharacteristicSection()}
            <hr></hr>
            {this._createCaracteristicSection()}
            <hr></hr>
            {this._createToolsSection()}
        </div>;
    }

    // private methods
    _createIntroductionSection() {
        var definitionsList = this._Characteristics[0].definitions.filter(d => d.selected);
        
        if (definitionsList.length > 0) {
            return (<div class="container">
                <h2>Performance</h2>
                {definitionsList.map(this._printDefinition)}
            </div>);
        } else {
            return;
        }
    }

    _createsubcharacteristicSection() {
        var subCarecteristic = this._Data.filter(d => d.selected);

        if (subCarecteristic.length > 0) {
            return (<div class="container">
                <h2>Subcharacteristics</h2>
                {subCarecteristic.map(this._printsubcharacteristic)}
            </div>);
        } else {
            return;
        }
    }

    _printDefinition(definition) {
        return (<div class="container definition">
            <h3>{definition.title}</h3>
            <p>{definition.description}</p>
        </div>)
    }

    _printsubcharacteristic(sub) {
        return (<div class="container subcharacteristic">
            <h3>{sub.name}</h3>
            <p>{sub.description}</p>
        </div>)
    }

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

    _addGeneric(item) {
        var selectedTool = this.getItemById(item.id);
        selectedTool.selected = true;
        console.log('ReportService', `add: ${item.id}`);
        return true;
    }

    _removeGeneric(item) {
        var selectedTool = this.getItemById(item.id);
        selectedTool.selected = false;
        console.log('ReportService', `remove: ${item.id}`)
        this._checkRemoveDependecies(item);
    }

    _checkDependentsTrigger(item) {
        if (item.dependents && item.dependents.length > 0) {
            let dependents = item.dependents.map(id => this.getItemById(id));
            dependents.forEach(d => this.addItem(d));
        }
    }

    _checkImpactTrigger(item) {
        if (item.impacts && item.impacts.length > 0) {
            let impacts = item.impacts.map(id => this.getItemById(id));
            impacts = impacts.filter(i => !i.selected);

            if (impacts.length > 0)
            {
                impacts.forEach(d => this.addImpact(d));
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param {*} item to be added
     * @returns 0 - can add, 1 - must select a caracteristic, 2 - must select a property
     */
    _checkAddValidation(item) {
        var characteristic = this.getItemById(item.characteristics);

        if (item.type === "properties"){
            if (characteristic.selected)
                return 0;
            else if (item.impacted) {
                this.addItem(characteristic);
                this._createNotificationAlert(characteristic, Enums.AlertType.SubCharacteristicSelected);
                return 0;
            } else {
                return 1;
            }
        } else if (item.type === "testCases" || item.type === "metrics") {
            var hasSelectedProperty = characteristic.properties.find(p => p.selected);
            return hasSelectedProperty !== undefined && hasSelectedProperty !== null ? 0 : 2;
        } else {
            return 0;
        }
    }

    _checkRemoveDependecies(item) {
        if (item.type === "subcharacteristics") { // remove characteristic -> remove all properties
            item.properties.map(p => this.removeItem(p));
        } else if(item.type === "properties") { // remove property, if is the last => remove all test cases and metrics
            let characteristic = this.getItemById(item.characteristics);
            var hasSelectedProperty = characteristic.properties.find(p => p.selected);
            if (!hasSelectedProperty) {
                characteristic.testCases.forEach(tc => this.removeItem(tc));
                characteristic.metrics.forEach(tc => this.removeItem(tc));
            }
        }
    }

    getItemById(id) {
        var currentList = this._Data.concat(this._Characteristics).concat(this._Tools).concat(this._IoTCharacteristics);

        while(currentList.length !== 0) {
            let item = currentList[0];

            if (item.id === id) return item;

            if (item.properties && item.properties.length > 0) currentList = currentList.concat(item.properties);
            if (item.testCases && item.testCases.length > 0) currentList = currentList.concat(item.testCases);
            if (item.metrics && item.metrics.length > 0) currentList = currentList.concat(item.metrics);
            if (item.definitions && item.definitions.length > 0) currentList = currentList.concat(item.definitions);
            if (item.metrics && item.metrics.length > 0) currentList = currentList.concat(item.metrics);

            currentList.shift();
        }
    }

    _createNotificationError(item, errorId) {
        var caracteristic = this.getItemById(item.characteristics);

        let message = "";
        if (errorId === 1) {
            message = `You must selected '${caracteristic.name}' in first place.`;
        } else if (errorId === 2) {
            message = `At least one property of ${caracteristic.name} must be selected before select a test case or a metric.`;
        }

        notificationService.showError(message);
    }

    _createNotificationAlert(item, alertType) {
        let message = "";
        if (alertType === Enums.AlertType.HasImpacts) {
            message = "This property impacts other properties. Impacted properties have been highlighted."
        } else if (alertType === Enums.AlertType.SubCharacteristicSelected) {
            message = `Subcharecteristic ${item.name} was selected automatically.`
        }

        notificationService.showInfo(message);
    }
}

export default new ReportService();