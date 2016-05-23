import {Component} from '@angular/core';

import {AppService} from './app.service';

import {GitHubProfileComponent} from './101Connecting to the Server/github-profile.component'
@Component({
    selector: 'component',
    moduleId: __moduleName,
    template: `<div class="media">
    <div class="media-body">    
        <h1 class="media-heading">Section 9</h1>
        <p class="lead">Connecting to the Server</p>
    </div>
</div>
<hr/>
<div *ngFor="let item of items">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <pre><code>{{item.note}}</code></pre>
</div>
<github-profile></github-profile>`,
    directives:[GitHubProfileComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}