import { exception } from "react-ga";
import { guideContent, tools } from '../models/guide-content-base';

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
        return this._checkDependentsTrigger();
    }

    removeItem(item) {
        if (item["id"] === undefined) throw exception();
        if (item["type"] === undefined) throw exception();

        if (item["type"] === "tools") return this._removeTool(item);

        let caracteristic = this._Data.find(i => i.id === item.characteristics);
        var selectedItem = caracteristic[item.type].find(i => i.id === item.id);
        
        selectedItem.selected = false;
        console.log('ReportService', `remove: ${item.id}`)
    }

    getAllItens() {
        return this._Data;
    }

    getTools() {
        return this._Tools;
    }

    getSelectedItems() {
        return this._Data.every(i => i.selected);
    }

    // private methods
    _addTool(tool) {
        var selectedTool = this._Tools.find(i => i.id === tool.id);
        selectedTool.selected = true;
        console.log('ReportService', `remove: ${tool.id}`)
    }

    _removeTool(tool) {
        var selectedTool = this._Tools.find(i => i.id === tool.id);
        selectedTool.selected = false;
        console.log('ReportService', `remove: ${tool.id}`)
    }

    _checkDependentsTrigger() {
        return [];
    }
}

export default new ReportService();