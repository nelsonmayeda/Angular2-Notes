import {Component} from 'angular2/core';

@Component({
    selector: 'component',
    moduleId: __moduleName,
    templateUrl: './app.html',
    styles:[`
        .media{
            min-height:200px;
            display:table;
        }
        .media-left{
            display:table-cell;
            vertical-align: middle;
        }
        .media-body{
            display:table-cell;
            vertical-align: middle;
        }
        .media-object{
            width:200px;
        }
    `]
})
export class AppComponent {
}