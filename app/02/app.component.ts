import {Component} from '@angular/core';

import {AppService} from './app.service';

import {AppComponent as Seed} from './004Seed/app.component';
import {AppComponent as Directives} from './Directives/app.component';
import {AppComponent as Components} from './015Components/app.component';

@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives: [Components,Seed, Directives],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}