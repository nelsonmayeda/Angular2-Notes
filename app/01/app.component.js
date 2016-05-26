"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'component',
            template: "<div class=\"media\">\n    <div class=\"media-left\">\n        <img class=\"media-object\" src=\"app/assets/angular.svg\"/>\n    </div>\n    <div class=\"media-body\">    \n        <h1 class=\"media-heading\">Section 1</h1>\n        <p class=\"lead\">Getting Started with Angular 2</p>\n    </div>\n</div>\n<hr/>\n<div class=\"media\">\n    <div class=\"media-left\">\n        <img class=\"media-object\" src=\"app/assets/Components.png\"/>\n    </div>\n    <div class=\"media-body\">    \n        <h3 class=\"media-heading\">Components</h3>\n        <p class=\"lead\">Encapsulates the template, data, and behavior of a view</p>\n    </div>\n</div>\n<div class=\"media\">\n    <div class=\"media-left\">\n        <img class=\"media-object\" src=\"app/assets/Directives.png\"/>\n    </div>\n    <div class=\"media-body\">    \n        <h3 class=\"media-heading\">Directives</h3>\n        <p class=\"lead\">Modify DOM elements and/or extend their behaviour</p>\n    </div>\n</div>\n<div class=\"media\">\n    <div class=\"media-left\">\n        <img class=\"media-object\" src=\"app/assets/Routers.png\"/>\n    </div>\n    <div class=\"media-body\">    \n        <h3 class=\"media-heading\">Routers</h3>\n        <p class=\"lead\">Responsible for navigation</p>\n    </div>\n</div>\n<div class=\"media\">\n    <div class=\"media-left\">\n        <img class=\"media-object\" src=\"app/assets/Services.png\"/>\n    </div>\n        <div class=\"media-body\">    <h3 class=\"media-heading\">Services</h3>\n        <p class=\"lead\">Class that encapsulates non-UI logic. Calls to HTTP, logging, data</p>\n    </div>\n</div>",
            styles: ["\n        .media{\n            min-height:200px;\n            display:table;\n        }\n        .media-left{\n            display:table-cell;\n            vertical-align: middle;\n        }\n        .media-body{\n            display:table-cell;\n            vertical-align: middle;\n        }\n        .media-object{\n            width:200px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map