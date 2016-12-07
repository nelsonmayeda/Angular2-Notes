import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ControllingRenderingofHTML }  from './app.component';
import {AppComponent as Zipper} from './054ZippyComponent/app.component';
import {ZippyComponent} from './054ZippyComponent/zippy.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ControllingRenderingofHTML,Zipper,ZippyComponent],
  bootstrap:    [ ControllingRenderingofHTML ]
})
export class AppModule05 { }