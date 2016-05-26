import {Component} from '@angular/core';

import {LikeComponent} from './036LikeComponent/like.component';
import {VoterComponent} from './038VoterComponent/voter.component';
import {AppComponent as Twitter} from './040Twitter/app.component';

import {AppService} from './app.service'

@Component({
    selector: 'component',
    template:`<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 4</h1>
        <p class="lead">Building Re-usable Components</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<like></like>
<voter></voter>
<twitter></twitter>`,
    directives: [LikeComponent,VoterComponent,Twitter ],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}