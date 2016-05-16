import {Component} from '@angular/core';

import {AppService} from './app.service';

import {GitHubProfileComponent} from './101Connecting to the Server/github-profile.component'
@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives:[GitHubProfileComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}