import {UIRouterModule, UIView} from "ui-router-ng2";
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

import {INITIAL_STATES} from "./app.states";
import {AppComponent} from "./app.component";
import {Sidebar} from './shared/app.component';

import {AppModule01} from './01/app.module';
import {AppModule02} from './02/app.module';
import {AppModule03} from './03/app.module';
import {AppModule04} from './04/app.module';
import {AppModule05} from './05/app.module';
import {AppModule06} from './06/app.module';
import {AppModule07} from './07/app.module';
import {AppModule08} from './08/app.module';
import {AppModule09} from './09/app.module';
import {AppModule10} from './10/app.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    CommonModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      otherwise: { state: 'app.Default', params: {} }
    }),
    AppModule01,
    AppModule02,
    AppModule03,
    AppModule04,
    AppModule05,
    AppModule06,
    AppModule07,
    AppModule08,
    AppModule09,
    AppModule10
],
  declarations: [ AppComponent , Sidebar],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap:    [ UIView ]
})
export class AppModule { }
