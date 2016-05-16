import {Component} from '@angular/core';

import {AppComponent as Zipper} from './054ZippyComponent/app.component'

import {AppService} from './app.service'
@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives:[Zipper],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}