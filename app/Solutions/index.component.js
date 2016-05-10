System.register(['angular2/core', 'angular2/router', './054ZippyComponent/app.component', './066Template-driven Forms/subscription-form.component', './069SignUpForm/app.component', './077Model-driven Forms/change-password-form.component', './081SeedForObservables/app.component', './101Connecting to the Server/github-profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, app_component_1, subscription_form_component_1, app_component_2, change_password_form_component_1, app_component_3, github_profile_component_1;
    var IndexComponent;
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
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            },
            function (change_password_form_component_1_1) {
                change_password_form_component_1 = change_password_form_component_1_1;
            },
            function (app_component_3_1) {
                app_component_3 = app_component_3_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            }],
        execute: function() {
            {
                path: '/ZippyComponent', name;
                'ZippyComponent', component;
                app_component_1.AppComponent;
            }
            {
                path: '/SubscriptionFormComponent', name;
                'SubscriptionFormComponent', component;
                subscription_form_component_1.SubscriptionFormComponent;
            }
            {
                path: '/SignUpForm', name;
                'SignUpForm', component;
                app_component_2.AppComponent;
            }
            {
                path: '/ChangePasswordFormComponent', name;
                'ChangePasswordFormComponent', component;
                change_password_form_component_1.ChangePasswordFormComponent;
            }
            {
                path: '/SeedForObservables', name;
                'SeedForObservables', component;
                app_component_3.AppComponent;
            }
            {
                path: '/GitHubProfileComponent', name;
                'GitHubProfileComponent', component;
                github_profile_component_1.GitHubProfileComponent;
            }
            {
                path: '/*other', name;
                'Other', redirectTo;
                ['Home'];
            }
            IndexComponent = (function () {
                function IndexComponent() {
                }
                IndexComponent = __decorate([
                    core_1.Component({
                        selector: 'solution-index',
                        moduleId: __moduleName,
                        templateUrl: './index.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});
//# sourceMappingURL=index.component.js.map