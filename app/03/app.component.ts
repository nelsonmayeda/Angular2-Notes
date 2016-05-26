import {Component} from '@angular/core';
import {AppService} from './app.service';
import {FavoriteComponent} from './026FavoriteComponent/favorite.component';


@Component({
    selector: 'component',
    template:`<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 3</h1>
        <p class="lead">Displaying Data and Handling Events</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.descriptiontitle}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<favorite></favorite>`,
    directives: [FavoriteComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}