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
var app_service_1 = require('./app.service');
var subscription_form_component_1 = require('./066Template-driven Forms/subscription-form.component');
var AppComponent = (function () {
    function AppComponent(noteService) {
        this.items = [];
        this.items = noteService.getNotes();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'component',
            template: "<div class=\"media\">\n    <div class=\"media-body\">    \n        <h1 class=\"media-heading\">Section 6</h1>\n        <p class=\"lead\">Building Forms with Basic Validation</p>\n    </div>\n</div>\n<hr/>\n<div *ngFor=\"let item of items\">\n    <h3>{{item.title}}</h3>\n    <p>{{item.description}}</p>\n    <pre><code>{{item.note}}</code></pre>\n</div>\n<subscription-form></subscription-form>",
            directives: [subscription_form_component_1.SubscriptionFormComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map