import {Component} from '@angular/core';

import {AppService} from './app.service';

@Component({
    selector: 'component',
  moduleId: module.id,
  templateUrl:'app.html',
  styleUrls:['app.css'],
    providers:[AppService]
})
export class BuildingFormswithComplexValidation {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}