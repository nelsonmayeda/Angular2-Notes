import {Component} from 'angular2/core';

import {FavoriteComponent} from './026FavoriteComponent/favorite.component';


@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives: [FavoriteComponent]
})
export class AppComponent {
}