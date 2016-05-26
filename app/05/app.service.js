"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "ngIf",
                description: "",
                note: "<i class=\"loading\" *ngIf=\"!isActive\"></i>"
            },
            {
                title: "ngSwitch",
                description: "",
                note: "<div [ngSwitch]=\"somevar\">\n    <div *ngSwitchWhen=\"'a'\" ngSwitchDefault></div>\n    <div *ngSwitchWhen=\"'b'\"></div>\n</div>"
            },
            {
                title: "ngFor",
                description: "",
                note: "<ul><li *ngFor=\"#item of items\"></li>"
            },
            {
                title: "Asterisk",
                description: "treat current element as a template",
                note: "<li *ngFor=\"#item of items\"></li>\nexample without asterisk\n<template ngFor=\"#item of items\">\n    <li></li>\n</template>"
            },
            {
                title: "Pipes",
                description: "",
                note: "<div>{{someVar | uppercase}}</div>"
            },
            {
                title: "Custom Pipes",
                description: "",
                note: "pipe.component.ts\nimport {Pipe, PipeTransform} from 'angular2/core';\n@Pipe({name:'custompipe'})\nexport class SummaryPipe implements PipeTransform{\n    transform(value:string, args: string[]){\n        return \"\";\n    }\n}\napp.component.ts\n\nimport {SummaryPipe} from './app/summarypipe'\n@Component({\n    template:'<div>{{someVar | custompipe}}',\n    pipes:[SummaryPipe]})"
            },
            {
                title: "ngClass",
                description: "",
                note: "\t<div\n[ngClass]=\"{\n    'glyphicon-star-empty':!isFavorite,\n    'glyphicon-star':isFavorite\n}></div>"
            },
            {
                title: "ngStyle",
                description: "",
                note: "\t<div\n[ngStyle]=\"{\n    'backgroundColor':isFavorite?'red':'blue',\n    'color':isFavorite?'red','blue'\n}></div>"
            },
            {
                title: "Elvis Operator",
                description: "null subproperty operator",
                note: "<div>{{task?.assignee?.role?.name}}</div>"
            },
            {
                title: "ng-content Element",
                description: "insertion points for external data",
                note: "@Component({\nselector:'appcomponent',\ntemplate:'<div><ng-content></ng-content></div>'})\nexport class AppComponent{}\n--\nimport {AppComponent} from './app/app.component'\n@Component({template:'<appcomponent>Insert This Text</appcomponent>',\ndirectives:[AppComponent]})"
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map