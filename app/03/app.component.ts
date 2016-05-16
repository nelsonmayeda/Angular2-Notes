import {Component} from '@angular/core';
import {AppService} from './app.service';
import {FavoriteComponent} from './026FavoriteComponent/favorite.component';


@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives: [FavoriteComponent],
    providers:[AppService]
})
export class AppComponent {
    items =[];
    constructor(noteService:AppService){
        this.items = noteService.getNotes();
    }
}