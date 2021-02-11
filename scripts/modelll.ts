import { WorkItemFormService } from "TFS/WorkItemTracking/Services";
import { JsonPatchDocument } from "VSS/WebApi/Contracts";
import RestClient = require("TFS/WorkItemTracking/RestClient");
import WorkItemService = require("TFS/WorkItemTracking/Services");
import { WorkItem, WorkItemRelation } from "TFS/WorkItemTracking/Contracts";
import { GetCommand } from "./StorageHelper";

export class documentBuild {
    op: string;
    path: string;
    value: any;
}
export class Model {

    public buttonName:string;
    public field: string;
    public fieldsList: Array<string>;
    public valuesList: Array<string>;    
    public externalUrlToCall: string;

    constructor( buttonsNames: string, field: string,externalUrlToCall:string,value:string) {
        this.field = field;
        this.fieldsList = field.split(",");
        this.valuesList = value.split(",");
        this.buttonName = buttonsNames;
        this.externalUrlToCall = externalUrlToCall;
        var count = 0;
        this.fieldsList.forEach(element => {
                WorkItemFormService.getService().then(
                    (service) => {
                        service.getFieldValue(element).then((values) => {
                            debugger;
                            this.externalUrlToCall =this.externalUrlToCall.replace(this.valuesList[count].toString(),values.toString());
                            count++; 
                        })
                    });

        });
    }
    public buttonPressed(): void {
        this.OpenUrl();
    }
    private OpenUrl() {
        var win = window.open(this.externalUrlToCall, '_blank');
        win.focus();
    }
}