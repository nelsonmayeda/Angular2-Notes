import {Component} from '@angular/core';

import {AppService} from './app.service';

@Component({
    selector: 'component',
  templateUrl:'app.html',
  styleUrls:['app.scss'],
    providers:[AppService]
})
export class BuildingFormswithBasicValidation {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}