import {Component} from '@angular/core';

import {AppService} from './app.service';


@Component({
    selector: 'component',
    template: `<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 8</h1>
        <p class="lead">Introduction to Reactive Extensions</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>`,
    directives:[],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}