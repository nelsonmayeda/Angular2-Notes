import {Component} from '@angular/core';

import {AppComponent as Zipper} from './054ZippyComponent/app.component'

import {AppService} from './app.service'
@Component({
    selector: 'component',
    template: `<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 5</h1>
        <p class="lead">Controlling Rendering of HTML</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<my-app></my-app>`,
    directives:[Zipper],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}