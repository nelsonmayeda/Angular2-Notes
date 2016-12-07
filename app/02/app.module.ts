import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Angular2Jumpstart }  from './app.component';
import {AppComponent as Seed} from './004Seed/app.component';
import {AppComponent as Components} from './012Components/app.component';
import {AuthorsComponent} from './012Components/authors.component';
//import {AppComponent as Services} from './014Services/app.component';
//import {AppComponent as DependencyInjection} from './015DependencyInjection/app.component';
import {AppComponent as Directives} from './019Directives/app.component';
import {AutoGrowDirective} from './019Directives/app.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Angular2Jumpstart,Components,AuthorsComponent,Seed, Directives,AutoGrowDirective],
  bootstrap:    [ Angular2Jumpstart ]
})
export class AppModule02 { }