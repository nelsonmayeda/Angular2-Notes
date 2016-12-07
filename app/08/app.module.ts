import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntroductiontoReactiveExtensions }  from './app.component';
import { AppComponent }  from './081SeedForObservables/app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ IntroductiontoReactiveExtensions,AppComponent ],
  bootstrap:    [ IntroductiontoReactiveExtensions ]
})
export class AppModule08 { }