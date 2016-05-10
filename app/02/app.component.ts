import {Component} from 'angular2/core';

import {AppComponent as Seed} from './004Seed/app.component';
import {AppComponent as Directives} from './Directives/app.component';
import {AppComponent as Components} from './015Components/app.component';

@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    directives: [Components,Seed, Directives]
})
export class AppComponent {
}