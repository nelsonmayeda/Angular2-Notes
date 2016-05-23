System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        moduleId: __moduleName,
                        template: "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n            <ul class=\"nav nav-sidebar\">\n                <li linkActive=\"active\">\n                    <a linkTo=\"/GettingStartedwithAngular2\">\n                        <div>Section 1</div>\n                        <div>Getting Started with Angular 2</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/Angular2Jumpstart\">\n                        <div>Section 2</div>\n                        <div>Angular 2 Jumpstart</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/DisplayingDataandHandlingFunctions\">\n                        <div>Section 3</div>\n                        <div>Displaying Data and Handling Events</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/BuildingReusableComponents\">\n                        <div>Section 4</div>\n                        <div>Building Re-usable Components</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/ControllingRenderingofHTML\">\n                        <div>Section 5</div>\n                        <div>Controlling Rendering of HTML</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/BuildingFormswithBasicValidation\">\n                        <div>Section 6</div>\n                        <div>Building Forms with Basic Validation</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/BuildingFormswithComplexValidation\">\n                        <div>Section 7</div>\n                        <div>Building Forms with Complex Validation</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/IntroductiontoReactiveExtensions\">\n                        <div>Section 8</div>\n                        <div>Introduction to Reactive Extensions</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/ConnectingtotheServer\">\n                        <div>Section 9</div>\n                        <div>Connecting to the Server</div>\n                    </a>\n                </li>\n                <li linkActive=\"active\">\n                    <a linkTo=\"/BuildingSinglePageApps\">\n                        <div>Section 10</div>\n                        <div>Building Single Page Apps</div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <route-view></route-view>\n        </div>\n    </div>\n</div>",
                        styles: [
                            "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin:0;padding:0;\n  z-index: 1000;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  background-color: #f5f5f5;\n  border-right: 1px solid #eee;\n}\n.nav-sidebar li{\n  padding:10px;\n}\n.nav-sidebar div{\n   font-weight:bold;\n}\n.nav-sidebar div + div{\n   font-weight:normal;\n}\n/* Sidebar navigation */\n.nav-sidebar > li.active,\n.nav-sidebar > li:hover,\n.nav-sidebar > li:focus {\n  background-color: #428bca;\n}\n.nav-sidebar > li.active > a,\n.nav-sidebar > li:hover > a,\n.nav-sidebar > li:focus > a{\n  color: #fff;\n  text-decoration:none;\n}\n\n\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map