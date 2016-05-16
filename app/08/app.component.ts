import {Component} from '@angular/core';

import {AppService} from './app.service';


@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives:[],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}