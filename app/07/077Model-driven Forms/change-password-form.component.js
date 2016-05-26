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
var common_1 = require('@angular/common');
var passwordValidators_1 = require('./passwordValidators');
var ChangePasswordFormComponent = (function () {
    function ChangePasswordFormComponent(fb) {
        this.form = fb.group({
            oldPassword: ['', common_1.Validators.required],
            newPassword: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    passwordValidators_1.PasswordValidators.complexPassword
                ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It's sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ['', common_1.Validators.required]
        }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
    }
    ChangePasswordFormComponent.prototype.changePassword = function () {
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '1234')
            oldPassword.setErrors({ validOldPassword: true });
        if (this.form.valid)
            alert("Password successfully changed.");
    };
    ChangePasswordFormComponent = __decorate([
        core_1.Component({
            selector: 'change-password-form',
            templateUrl: "<form [ngFormModel]=\"form\" (ngSubmit)=\"changePassword()\">\n    <div class=\"form-group\">\n        <label for=\"oldPassword\">Current Password</label>\n        <input \n            id=\"oldPassword\" \n            type=\"password\" \n            class=\"form-control\"\n            ngControl=\"oldPassword\"\n            #oldPassword=\"ngForm\">\n        <div *ngIf=\"oldPassword.touched && oldPassword.errors\">\n            <div\n                *ngIf=\"oldPassword.errors.required\" \n                class=\"alert alert-danger\">Old password is required.</div>\n            <div\n                *ngIf=\"oldPassword.errors.validOldPassword\"\n                class=\"alert alert-danger\">Old password is incorrect.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"newPassword\">New Password</label>\n        <input \n            id=\"newPassword\" \n            type=\"password\" \n            class=\"form-control\"\n            ngControl=\"newPassword\"\n            #newPassword=\"ngForm\">\n        <div *ngIf=\"newPassword.touched && newPassword.errors\">\n            <div \n                *ngIf=\"newPassword.errors.required\"\n                class=\"alert alert-danger\">\n                New password is required.</div>\n            <div \n                *ngIf=\"newPassword.errors.complexPassword\"\n                class=\"alert alert-danger\">\n                New password should be minimum {{ newPassword.errors.complexPassword.minLength }} characters.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input \n            id=\"confirmPassword\" \n            type=\"password\" \n            class=\"form-control\"\n            ngControl=\"confirmPassword\"\n            #confirmPassword=\"ngForm\">\n        <div \n            *ngIf=\"confirmPassword.touched && !confirmPassword.valid\"\n            class=\"alert alert-danger\">\n            Confirm the password.</div>\n        <!-- \n            Note that here I'm checking for form.errors.passwordShouldMatch\n            because this validation is applied at the form itself. \n         -->\n        <div \n            *ngIf=\"confirmPassword.touched && form.errors && form.errors.passwordsShouldMatch\"\n            class=\"alert alert-danger\">\n            Passwords don't match.</div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Change Password</button>\n</form>"
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}());
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=change-password-form.component.js.map