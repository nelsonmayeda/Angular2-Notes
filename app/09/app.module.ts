import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConnectingtotheServer }  from './app.component';
import {GitHubProfileComponent} from './101Connecting to the Server/github-profile.component';

import {GitHubService} from './101Connecting to the Server/github.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ConnectingtotheServer,GitHubProfileComponent],
  bootstrap:    [ ConnectingtotheServer ],
    providers: [ GitHubService]
})
export class AppModule09 { }