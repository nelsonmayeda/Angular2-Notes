System.register(['angular2/core', 'angular2/router', './01/app.component', './02/app.component', './03/app.component', './04/app.component', './05/app.component', './06/app.component', './07/app.component', './08/app.component', './09/app.component', './10/app.component'], function(exports_1, context_1) {
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
    var core_1, router_1, app_component_1, app_component_2, app_component_3, app_component_4, app_component_5, app_component_6, app_component_7, app_component_8, app_component_9, app_component_10;
    var MyAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            },
            function (app_component_3_1) {
                app_component_3 = app_component_3_1;
            },
            function (app_component_4_1) {
                app_component_4 = app_component_4_1;
            },
            function (app_component_5_1) {
                app_component_5 = app_component_5_1;
            },
            function (app_component_6_1) {
                app_component_6 = app_component_6_1;
            },
            function (app_component_7_1) {
                app_component_7 = app_component_7_1;
            },
            function (app_component_8_1) {
                app_component_8 = app_component_8_1;
            },
            function (app_component_9_1) {
                app_component_9 = app_component_9_1;
            },
            function (app_component_10_1) {
                app_component_10 = app_component_10_1;
            }],
        execute: function() {
            MyAppComponent = (function () {
                function MyAppComponent(_router) {
                    this._router = _router;
                }
                MyAppComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                MyAppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/GettingStartedwithAngular2', name: 'GettingStartedwithAngular2', component: app_component_1.AppComponent },
                        { path: '/Angular2Jumpstart', name: 'Angular2Jumpstart', component: app_component_2.AppComponent },
                        { path: '/DisplayingDataandHandlingFunctions', name: 'DisplayingDataandHandlingFunctions', component: app_component_3.AppComponent },
                        { path: '/BuildingReusableComponents', name: 'BuildingReusableComponents', component: app_component_4.AppComponent },
                        { path: '/ControllingRenderingofHTML', name: 'ControllingRenderingofHTML', component: app_component_5.AppComponent },
                        { path: '/BuildingFormswithBasicValidation', name: 'BuildingFormswithBasicValidation', component: app_component_6.AppComponent },
                        { path: '/BuildingFormswithComplexValidation', name: 'BuildingFormswithComplexValidation', component: app_component_7.AppComponent },
                        { path: '/IntroductiontoReactiveExtensions', name: 'IntroductiontoReactiveExtensions', component: app_component_8.AppComponent },
                        { path: '/ConnectingtotheServer', name: 'ConnectingtotheServer', component: app_component_9.AppComponent },
                        { path: '/BuildingSinglePageApps', name: 'BuildingSinglePageApps', component: app_component_10.AppComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['GettingStartedwithAngular2'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        moduleId: __moduleName,
                        templateUrl: './app.html',
                        styleUrls: ['./sidebar.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MyAppComponent);
                return MyAppComponent;
            }());
            exports_1("MyAppComponent", MyAppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map