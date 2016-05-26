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
var app_states_1 = require("./app.states");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
/**
 * This class should is added to the Angular 2 bootstrap() providers and is injected by the
 * UIRouter provider.  The UIRouter provider will then invoke this classes configure()
 * function and pass in the UIRouter instance, which we configure.  After configuration,
 * UIRouter syncs up with the current URL.
 */
var MyUIRouterConfig = (function () {
    function MyUIRouterConfig(injector) {
        this.injector = injector;
    }
    MyUIRouterConfig.prototype.configure = function (uiRouter) {
        var _this = this;
        // Register each state definition (from app.states.ts) with the StateRegistry
        app_states_1.INITIAL_STATES.forEach(function (state) { return uiRouter.stateRegistry.register(state); });
        // Define a default behavior, for when the URL matched no routes
        uiRouter.urlRouterProvider.otherwise(function () { return uiRouter.stateService.go("app.Default", null, null); });
        // As of 1.0.0-alpha.2, ui-router only supports ng1-style string-based injection for resolves and transition hooks.
        // We're working on more ng2-friendly DI.  
        // In the meantime, you can map global providers to DI strings here.  Use the strings
        // to inject the service into your resolve or transition hook. (see foo.states.ts)
        var rootState = uiRouter.stateRegistry.root();
        rootState.resolve['http'] = function () { return _this.injector.get(http_1.Http); };
    };
    MyUIRouterConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Injector])
    ], MyUIRouterConfig);
    return MyUIRouterConfig;
}());
exports.MyUIRouterConfig = MyUIRouterConfig;
//# sourceMappingURL=router.config.js.map