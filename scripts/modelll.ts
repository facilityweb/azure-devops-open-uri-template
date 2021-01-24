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
    public externalUrlToCall: string;

    constructor( buttonsNames: string, field: string,externalUrlToCall:string) {
        this.field = field;
        this.buttonName = buttonsNames;
        this.externalUrlToCall = externalUrlToCall;
    }
    public buttonPressed(): void {
            this.OpenWhatssApp();
    }
    private OpenWhatssApp() {
        WorkItemFormService.getService().then(
            (service) => {
                service.getFieldValue(this.field).then((values) => {
                    var win = window.open(this.externalUrlToCall+values, '_blank');
                    win.focus();
                })
            });
    }
}