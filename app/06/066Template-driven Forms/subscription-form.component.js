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
var SubscriptionFormComponent = (function () {
    function SubscriptionFormComponent() {
        this.frequencies = [
            { id: 1, label: 'Daily' },
            { id: 2, label: 'Weekly' },
            { id: 3, label: 'Monthly' }
        ];
    }
    SubscriptionFormComponent.prototype.onSubscribe = function (form) {
        console.log(form.value);
    };
    SubscriptionFormComponent = __decorate([
        core_1.Component({
            selector: 'subscription-form',
            template: "<form #f=\"ngForm\" (ngSubmit)=\"onSubscribe(f.form)\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input \n            ngControl=\"name\" \n            #name=\"ngForm\" \n            id=\"name\" \n            type=\"text\" \n            class=\"form-control\" \n            required\n            minlength=\"3\">\n        <div *ngIf=\"name.touched && name.errors\">\n            <div \n                class=\"alert alert-danger\" \n                *ngIf=\"name.errors.required\">\n                Name is required.\n            </div>\n            <div\n                class=\"alert alert-danger\"\n                *ngIf=\"name.errors.minlength\">\n                Name should be minimum {{ name.errors.minlength.requiredLength }} characters.\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input \n            ngControl=\"email\" \n            #email=\"ngForm\" \n            id=\"email\" \n            type=\"email\" \n            class=\"form-control\" \n            required>\n        <div \n            class=\"alert alert-danger\" \n            *ngIf=\"email.touched && !email.valid\">\n            Email is required.\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"frequency\">Frequency of emails</label>\n        <select\n            ngControl=\"frequency\" \n            #frequency=\"ngForm\" \n            id=\"frequency\" \n            class=\"form-control\" \n            required>\n            <option value=\"\"></option>\n            <option *ngFor=\"let frequency of frequencies\" value=\"{{ frequency.id }}\">\n                {{ frequency.label }}\n            </option>\n        </select> \n        <div \n            class=\"alert alert-danger\" \n            *ngIf=\"frequency.touched && !frequency.valid\">\n            This field is required.\n        </div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Subscribe</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], SubscriptionFormComponent);
    return SubscriptionFormComponent;
}());
exports.SubscriptionFormComponent = SubscriptionFormComponent;
//# sourceMappingURL=subscription-form.component.js.map