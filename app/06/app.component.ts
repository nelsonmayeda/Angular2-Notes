import {Component} from '@angular/core';

import {AppService} from './app.service';

import {SubscriptionFormComponent} from './066Template-driven Forms/subscription-form.component'
@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives:[SubscriptionFormComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}