import {Component} from '@angular/core';

import {AppService} from './app.service';

import {SubscriptionFormComponent} from './066Template-driven Forms/subscription-form.component'
@Component({
    selector: 'component',
    template: `<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 6</h1>
        <p class="lead">Building Forms with Basic Validation</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<subscription-form></subscription-form>`,
    directives:[SubscriptionFormComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}