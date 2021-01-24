// import * as WitService from "TFS/WorkItemTracking/Services";
import { Model } from "./modelll";
import { View } from "./view";
import { ErrorView } from "./errorView";
import * as Q from "q";
export class Controller {
    private _buttonName: string = "";  
    private _filedToCall: string = ""; 
    private _externalUrlToCall: string = ""; 
    private _inputs;                      //: IDictionaryStringTo<string>;
    private _model: Model;
    private _view: View;
    constructor() {
        this._initialize();
    }
    private _initialize(): void {
        this._inputs = VSS.getConfiguration().witInputs;
        this._buttonName = this._inputs["ButtonName"];
        this._filedToCall = this._inputs["FieldWithCellNumber"];
        this._externalUrlToCall = this._inputs["ExternalUrl"];        
        this._model = new Model(this._buttonName,this._filedToCall,this._externalUrlToCall);
        this._view = new View(this._model);
        VSS.resize();
    }
    private _handleError(error: string): void {
        new ErrorView(error);
    }
}

