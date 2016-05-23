import {Component} from '@angular/core';

import {AppService} from './app.service';

import {SignUpFormComponent} from './069SignUpForm/signup-form.component'
import {ChangePasswordFormComponent} from './077Model-driven Forms/change-password-form.component'

@Component({
    selector: 'component',
    moduleId: __moduleName,
    template: `<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 7</h1>
        <p class="lead">Building Forms with Complex Validation</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<signup-form></signup-form>
<change-password-form></change-password-form>`,
    directives:[SignUpFormComponent,ChangePasswordFormComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}