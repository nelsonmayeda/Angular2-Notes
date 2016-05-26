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
var SignUpFormComponent = (function () {
    function SignUpFormComponent() {
    }
    SignUpFormComponent = __decorate([
        core_1.Component({
            selector: 'signup-form',
            template: "<form>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input \n            id=\"username\" \n            type=\"text\" \n            class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input \n            id=\"password\" \n            type=\"text\" \n            class=\"form-control\">\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], SignUpFormComponent);
    return SignUpFormComponent;
}());
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map