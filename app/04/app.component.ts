import {Component} from '@angular/core';

import {LikeComponent} from './036LikeComponent/like.component';
import {VoterComponent} from './038VoterComponent/voter.component';
import {AppComponent as Twitter} from './040Twitter/app.component';

import {AppService} from './app.service'

@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: "./app.html",
    directives: [LikeComponent,VoterComponent,Twitter ],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}