import {Component} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

import {PasswordValidators} from './passwordValidators';

@Component({
    selector: 'change-password-form',
    //moduleId: module.id,
    //templateUrl:'change-password-form.html',
    template:``,
    styles:[``]
})
export class ChangePasswordFormComponent {
    ng2Form: FormGroup;
    
    constructor(fb: FormBuilder){
        this.ng2Form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It's sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
    }
    
    changePassword(arg){
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.ng2Form.find('oldPassword');
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.ng2Form.valid)
            alert("Password successfully changed.");
    }
}