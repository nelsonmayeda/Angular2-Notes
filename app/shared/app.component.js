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
var ui_router_ng2_1 = require("ui-router-ng2");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            directives: [ui_router_ng2_1.UIROUTER_DIRECTIVES],
            selector: 'sidebar',
            template: "\n            <ul class=\"nav nav-sidebar\">\n                <li >\n                    <a uiSref=\"app.GettingStartedwithAngular2\">\n                        <div>Section 1</div>\n                        <div>Getting Started with Angular 2</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.Angular2Jumpstart\">\n                        <div>Section 2</div>\n                        <div>Angular 2 Jumpstart</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.DisplayingDataandHandlingFunctions\">\n                        <div>Section 3</div>\n                        <div>Displaying Data and Handling Events</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.BuildingReusableComponents\">\n                        <div>Section 4</div>\n                        <div>Building Re-usable Components</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.ControllingRenderingofHTML\">\n                        <div>Section 5</div>\n                        <div>Controlling Rendering of HTML</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.BuildingFormswithBasicValidation\">\n                        <div>Section 6</div>\n                        <div>Building Forms with Basic Validation</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.BuildingFormswithComplexValidation\">\n                        <div>Section 7</div>\n                        <div>Building Forms with Complex Validation</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.IntroductiontoReactiveExtensions\">\n                        <div>Section 8</div>\n                        <div>Introduction to Reactive Extensions</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.ConnectingtotheServer\">\n                        <div>Section 9</div>\n                        <div>Connecting to the Server</div>\n                    </a>\n                </li>\n                <li >\n                    <a uiSref=\"app.BuildingSinglePageApps\">\n                        <div>Section 10</div>\n                        <div>Building Single Page Apps</div>\n                    </a>\n                </li>\n            </ul>",
            styles: [
                "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin:0;padding:0;\n  z-index: 1000;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  background-color: #f5f5f5;\n  border-right: 1px solid #eee;\n}\n.nav-sidebar li{\n  padding:10px;\n}\n.nav-sidebar div{\n   font-weight:bold;\n}\n.nav-sidebar div + div{\n   font-weight:normal;\n}\n/* Sidebar navigation */\n.nav-sidebar > li.active,\n.nav-sidebar > li:hover,\n.nav-sidebar > li:focus {\n  background-color: #428bca;\n}\n.nav-sidebar > li.active > a,\n.nav-sidebar > li:hover > a,\n.nav-sidebar > li:focus > a{\n  color: #fff;\n  text-decoration:none;\n}"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map