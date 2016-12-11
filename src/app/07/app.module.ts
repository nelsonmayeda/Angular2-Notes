import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BuildingFormswithComplexValidation }  from './app.component';
import {SignUpFormComponent} from './069SignUpForm/signup-form.component';
import {ChangePasswordFormComponent} from './077Model-driven Forms/change-password-form.component';

@NgModule({
  imports:      [ BrowserModule,
        FormsModule,ReactiveFormsModule],
  declarations: [ BuildingFormswithComplexValidation,SignUpFormComponent,ChangePasswordFormComponent],
  bootstrap:    [ BuildingFormswithComplexValidation ]
})
export class AppModule07 { }