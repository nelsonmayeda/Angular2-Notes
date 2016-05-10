import {Component, OnInit} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {NoteService} from './note.service'

@Component({
    selector: 'solution-index',
    moduleId: __moduleName,
    templateUrl: './index.html',
    providers:[NoteService]
})
export class IndexComponent implements OnInit {
    isLoading = true;
    topics = [];
    constructor(private _noteService : NoteService){
    }
    
    ngOnInit(){
        this._noteService.getTopics()
        .subscribe(
            /*value*/
            x => this.topics.push(x),
            /*error*/
            null,
            /*completed */
            ()=>{ this.isLoading = false; });
    }
}