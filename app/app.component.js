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
            selector: 'my-app',
            template: "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n            <ui-view name=\"sidebar\"></ui-view>    \n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n            <ui-view></ui-view>\n        </div>\n    </div>\n</div>\n",
            styles: [
                "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin:0;padding:0;\n  z-index: 1000;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n  background-color: #f5f5f5;\n  border-right: 1px solid #eee;\n}\n.nav-sidebar li{\n  padding:10px;\n}\n.nav-sidebar div{\n   font-weight:bold;\n}\n.nav-sidebar div + div{\n   font-weight:normal;\n}\n/* Sidebar navigation */\n.nav-sidebar > li.active,\n.nav-sidebar > li:hover,\n.nav-sidebar > li:focus {\n  background-color: #428bca;\n}\n.nav-sidebar > li.active > a,\n.nav-sidebar > li:hover > a,\n.nav-sidebar > li:focus > a{\n  color: #fff;\n  text-decoration:none;\n}\n/*\n * Main content\n */\n\n.main {\n  padding: 20px;\n}\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n}\n.main .page-header {\n  margin-top: 0;\n}"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map