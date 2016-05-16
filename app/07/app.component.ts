import {Component} from '@angular/core';

import {AppService} from './app.service';

import {SignUpFormComponent} from './069SignUpForm/signup-form.component'
import {ChangePasswordFormComponent} from './077Model-driven Forms/change-password-form.component'

@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives:[SignUpFormComponent,ChangePasswordFormComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}