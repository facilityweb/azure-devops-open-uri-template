import { Model } from "./modelll";

export class View {
    constructor(model: Model) {
        // var newLine = $("<br>");
        //$(".container").remove();
        var container = $("<div />");
        container.addClass("container");
        container.addClass("wrap");
        let index:number=0;

            let actionButton = $("<button />");
            actionButton.addClass("buttons");
            // actionButton.text(" " + element + " ");
            actionButton.text(" " + model.buttonName + " ");
            actionButton.click(() => { model.buttonPressed(); });
            // container.append(newLine);
            container.append(actionButton);
            // container.append($("<br />"));
            index++;

        $("body").append(container);
        VSS.resize();
    }
}