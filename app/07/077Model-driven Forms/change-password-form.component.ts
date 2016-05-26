import {Component} from '@angular/core';
import {ControlGroup, Validators, FormBuilder} from '@angular/common';

import {PasswordValidators} from './passwordValidators';

@Component({
    selector: 'change-password-form',
    templateUrl: `<form [ngFormModel]="form" (ngSubmit)="changePassword()">
    <div class="form-group">
        <label for="oldPassword">Current Password</label>
        <input 
            id="oldPassword" 
            type="password" 
            class="form-control"
            ngControl="oldPassword"
            #oldPassword="ngForm">
        <div *ngIf="oldPassword.touched && oldPassword.errors">
            <div
                *ngIf="oldPassword.errors.required" 
                class="alert alert-danger">Old password is required.</div>
            <div
                *ngIf="oldPassword.errors.validOldPassword"
                class="alert alert-danger">Old password is incorrect.</div>
        </div>
    </div>
    <div class="form-group">
        <label for="newPassword">New Password</label>
        <input 
            id="newPassword" 
            type="password" 
            class="form-control"
            ngControl="newPassword"
            #newPassword="ngForm">
        <div *ngIf="newPassword.touched && newPassword.errors">
            <div 
                *ngIf="newPassword.errors.required"
                class="alert alert-danger">
                New password is required.</div>
            <div 
                *ngIf="newPassword.errors.complexPassword"
                class="alert alert-danger">
                New password should be minimum {{ newPassword.errors.complexPassword.minLength }} characters.</div>
        </div>
    </div>
    <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input 
            id="confirmPassword" 
            type="password" 
            class="form-control"
            ngControl="confirmPassword"
            #confirmPassword="ngForm">
        <div 
            *ngIf="confirmPassword.touched && !confirmPassword.valid"
            class="alert alert-danger">
            Confirm the password.</div>
        <!-- 
            Note that here I'm checking for form.errors.passwordShouldMatch
            because this validation is applied at the form itself. 
         -->
        <div 
            *ngIf="confirmPassword.touched && form.errors && form.errors.passwordsShouldMatch"
            class="alert alert-danger">
            Passwords don't match.</div>
    </div>
    <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Change Password</button>
</form>`
})
export class ChangePasswordFormComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
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
    
    changePassword(){
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
}