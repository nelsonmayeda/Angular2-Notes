import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BuildingReusableComponents }  from './app.component';
import {LikeComponent} from './036LikeComponent/like.component';
import {VoterComponent} from './038VoterComponent/voter.component';
import {AppComponent as Twitter} from './040Twitter/app.component';
import {TweetComponent} from './040Twitter/tweet.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BuildingReusableComponents,LikeComponent,VoterComponent,Twitter,TweetComponent ],
  bootstrap:    [ BuildingReusableComponents ]
})
export class AppModule04 { }