import {Component} from '@angular/core';

import {AppService} from './app.service';

import {AppComponent as Seed} from './004Seed/app.component';
import {AppComponent as Directives} from './Directives/app.component';
import {AppComponent as Components} from './015Components/app.component';

@Component({
    selector: 'component',
    moduleId: __moduleName,
    template:`<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 2</h1>
        <p class="lead">Angular 2 Jumpstart</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
	<h3>{{item.title}}</h3>
	<p>{{item.description}}</p>
	<pre><code>{{item.note}}</code></pre>
</div>
<div class="jumbotron">
	<appcomponent></appcomponent>
</div>
<div class="jumbotron">
	<p>click to activate</p>
	<directives></directives>
</div>
<div class="jumbotron">
	<app-component></app-component>
</div>`,
    directives: [Components,Seed, Directives],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}