import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisplayingDataandHandlingFunctions }  from './app.component';
import {FavoriteComponent} from './026FavoriteComponent/favorite.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DisplayingDataandHandlingFunctions,FavoriteComponent ],
  bootstrap:    [ DisplayingDataandHandlingFunctions ]
})
export class AppModule03 { }