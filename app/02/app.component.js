System.register(['@angular/core', './app.service', './004Seed/app.component', './Directives/app.component', './015Components/app.component'], function(exports_1, context_1) {
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
    var core_1, app_service_1, app_component_1, app_component_2, app_component_3;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            },
            function (app_component_3_1) {
                app_component_3 = app_component_3_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(noteService) {
                    this.items = [];
                    this.items = noteService.getNotes();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'component',
                        moduleId: __moduleName,
                        template: "<div class=\"media\">\n    <div class=\"media-body\">    \n        <h1 class=\"media-heading\">Section 2</h1>\n        <p class=\"lead\">Angular 2 Jumpstart</p>\n    </div>\n</div>\n<hr/>\n<div *ngFor=\"let item of items\">\n\t<h3>{{item.title}}</h3>\n\t<p>{{item.description}}</p>\n\t<pre><code>{{item.note}}</code></pre>\n</div>\n<div class=\"jumbotron\">\n\t<appcomponent></appcomponent>\n</div>\n<div class=\"jumbotron\">\n\t<p>click to activate</p>\n\t<directives></directives>\n</div>\n<div class=\"jumbotron\">\n\t<app-component></app-component>\n</div>",
                        directives: [app_component_3.AppComponent, app_component_1.AppComponent, app_component_2.AppComponent],
                        providers: [app_service_1.AppService]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map