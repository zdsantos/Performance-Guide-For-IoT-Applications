//https://dev.to/taikio/criando-documentos-pdf-com-reactjs-4lkl
//https://react-pdf.org/
import React from 'react';
import Latex from 'react-latex';
import Image from '../components/elements/Image';
import notificationService from './notificationService';
import reportService from './reportService';

class PrintService {
    
    generateReport() {
        return <div class="report">
            <div class="header">
                <div class="container">
                    <h1>Test Plan Template</h1>
                </div>
            </div>
            {this._createIntroductionSection()}
            <hr></hr>
            {this._createCorrelationsSection()}
            <hr></hr>
            {this._createsubcharacteristicSection()}
            <hr></hr>
            {this._createCaracteristicSection()}
            <hr></hr>
            {this._createCostBenefitSection()}
            <hr></hr>
            {this._createToolsSection()}
        </div>;
    }

    // private methods
    _createIntroductionSection() {
        var definitionsList = reportService._Characteristics[0].definitions.filter(d => d.selected);
        
        if (definitionsList.length > 0) {
            return (<div class="container">
                <h2>Performance</h2>
                {definitionsList.map(this._printDefinition)}
            </div>);
        } else {
            return;
        }
    }

    _createCorrelationsSection() {
        var definitionsList = reportService._IoTCharacteristics.filter(d => d.selected);
        
        if (definitionsList.length > 0) {
            return (<div class="container">
                <h2>Correlations</h2>
                {definitionsList.map(this._printDefinition)}
            </div>);
        } else {
            return;
        }
    }

    _createsubcharacteristicSection() {
        var subCarecteristic = reportService._Data.filter(d => d.selected);

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
            <h3>{definition.name}</h3>
            { definition.definition ? <p>{definition.definition}</p> : <p>{definition.description}</p> }
        </div>)
    }

    _printsubcharacteristic(sub) {
        return (<div class="container subcharacteristic">
            <h3>{sub.name}</h3>
            <p>{sub.description}</p>
        </div>)
    }

    _createCaracteristicSection() {
        var caracteristicsList = reportService._Data.filter(c => reportService._checkIsUsedCaracteristic(c));

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

    _createCostBenefitSection() {
        if (!reportService.CostBenefit) {
            notificationService.showError('To generate the cost-benefit section it is necessary to make the cost-benefit calculation.')
            return;
        }
        
        var text = reportService.getCostBenefitGroupDescription();
        return <div className="container">
            <h2>Cost-Benefit</h2>
            <div className="costbenefit-result">
                <div>
                    <span>Impact: {reportService.CostBenefit.impact.toFixed(2)}</span><br />
                    <span>Effort: {reportService.CostBenefit.effort.toFixed(2)}</span><br />
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
                <Image alt="Archteture flow" src={require('../assets/images/groups.png')}></Image>
            </div>
        </div>
    }

    _createToolsSection() {
        var toolsList = reportService._Tools.filter(t => t.selected);

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
}

export default new PrintService();