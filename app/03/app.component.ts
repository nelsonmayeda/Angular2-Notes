import {Component} from 'angular2/core';

import {FavoriteComponent} from './026FavoriteComponent/favorite.component';


@Component({
    selector: 'component',
    template: `
    Section 3
Displaying Data and Handling Events
            <favorite></favorite>
            `,
    directives: [FavoriteComponent]
})
export class AppComponent {
}