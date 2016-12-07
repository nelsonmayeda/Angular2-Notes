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
var forms_1 = require("@angular/forms");
var passwordValidators_1 = require("./passwordValidators");
var ChangePasswordFormComponent = (function () {
    function ChangePasswordFormComponent(fb) {
        this.ng2Form = fb.group({
            oldPassword: ['', forms_1.Validators.required],
            newPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    passwordValidators_1.PasswordValidators.complexPassword
                ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It's sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
    }
    ChangePasswordFormComponent.prototype.changePassword = function (arg) {
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.ng2Form.find('oldPassword');
        if (oldPassword.value != '1234')
            oldPassword.setErrors({ validOldPassword: true });
        if (this.ng2Form.valid)
            alert("Password successfully changed.");
    };
    return ChangePasswordFormComponent;
}());
ChangePasswordFormComponent = __decorate([
    core_1.Component({
        selector: 'change-password-form',
        //moduleId: module.id,
        //templateUrl:'change-password-form.html',
        template: "",
        styles: [""]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ChangePasswordFormComponent);
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=change-password-form.component.js.map