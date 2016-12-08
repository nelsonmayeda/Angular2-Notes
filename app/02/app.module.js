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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_component_2 = require("./004Seed/app.component");
var app_component_3 = require("./012Components/app.component");
var authors_component_1 = require("./012Components/authors.component");
//import {AppComponent as Services} from './014Services/app.component';
//import {AppComponent as DependencyInjection} from './015DependencyInjection/app.component';
var app_component_4 = require("./019Directives/app.component");
var app_directive_1 = require("./019Directives/app.directive");
var AppModule02 = (function () {
    function AppModule02() {
    }
    return AppModule02;
}());
AppModule02 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.Angular2Jumpstart, app_component_3.AppComponent, authors_component_1.AuthorsComponent, app_component_2.AppComponent, app_component_4.AppComponent, app_directive_1.AutoGrowDirective],
        bootstrap: [app_component_1.Angular2Jumpstart]
    }),
    __metadata("design:paramtypes", [])
], AppModule02);
exports.AppModule02 = AppModule02;
//# sourceMappingURL=app.module.js.map