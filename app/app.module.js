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
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_states_1 = require("./app.states");
var app_component_1 = require("./app.component");
var app_component_2 = require("./shared/app.component");
var app_module_1 = require("./01/app.module");
var app_module_2 = require("./02/app.module");
var app_module_3 = require("./03/app.module");
var app_module_4 = require("./04/app.module");
var app_module_5 = require("./05/app.module");
var app_module_6 = require("./06/app.module");
var app_module_7 = require("./07/app.module");
var app_module_8 = require("./08/app.module");
var app_module_9 = require("./09/app.module");
var app_module_10 = require("./10/app.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ui_router_ng2_1.UIRouterModule.forRoot({
                states: app_states_1.INITIAL_STATES,
                otherwise: { state: 'app.Default', params: {} }
            }),
            app_module_1.AppModule01,
            app_module_2.AppModule02,
            app_module_3.AppModule03,
            app_module_4.AppModule04,
            app_module_5.AppModule05,
            app_module_6.AppModule06,
            app_module_7.AppModule07,
            app_module_8.AppModule08,
            app_module_9.AppModule09,
            app_module_10.AppModule10
        ],
        declarations: [app_component_1.AppComponent, app_component_2.Sidebar],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: core_1.SystemJsNgModuleLoader },
        ],
        bootstrap: [ui_router_ng2_1.UIView]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map