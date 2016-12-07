import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BuildingFormswithBasicValidation }  from './app.component';
import {SubscriptionFormComponent} from './066Template-driven Forms/subscription-form.component';

@NgModule({
  imports:      [ BrowserModule,
        FormsModule ],
  declarations: [ BuildingFormswithBasicValidation,SubscriptionFormComponent],
  bootstrap:    [ BuildingFormswithBasicValidation ]
})
export class AppModule06 { }