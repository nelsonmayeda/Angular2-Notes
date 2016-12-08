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
var app_component_2 = require("./054ZippyComponent/app.component");
var zippy_component_1 = require("./054ZippyComponent/zippy.component");
var AppModule05 = (function () {
    function AppModule05() {
    }
    return AppModule05;
}());
AppModule05 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.ControllingRenderingofHTML, app_component_2.AppComponent, zippy_component_1.ZippyComponent],
        bootstrap: [app_component_1.ControllingRenderingofHTML]
    }),
    __metadata("design:paramtypes", [])
], AppModule05);
exports.AppModule05 = AppModule05;
//# sourceMappingURL=app.module.js.map