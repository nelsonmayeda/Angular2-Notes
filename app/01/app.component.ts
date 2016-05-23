import {Component} from '@angular/core';

@Component({
    selector: 'component',
    moduleId: __moduleName,
    template: `<div class="media">
    <div class="media-left">
        <img class="media-object" src="app/assets/angular.svg"/>
    </div>
    <div class="media-body">    
        <h1 class="media-heading">Section 1</h1>
        <p class="lead">Getting Started with Angular 2</p>
    </div>
</div>
<hr/>
<div class="media">
    <div class="media-left">
        <img class="media-object" src="app/assets/Components.png"/>
    </div>
    <div class="media-body">    
        <h3 class="media-heading">Components</h3>
        <p class="lead">Encapsulates the template, data, and behavior of a view</p>
    </div>
</div>
<div class="media">
    <div class="media-left">
        <img class="media-object" src="app/assets/Directives.png"/>
    </div>
    <div class="media-body">    
        <h3 class="media-heading">Directives</h3>
        <p class="lead">Modify DOM elements and/or extend their behaviour</p>
    </div>
</div>
<div class="media">
    <div class="media-left">
        <img class="media-object" src="app/assets/Routers.png"/>
    </div>
    <div class="media-body">    
        <h3 class="media-heading">Routers</h3>
        <p class="lead">Responsible for navigation</p>
    </div>
</div>
<div class="media">
    <div class="media-left">
        <img class="media-object" src="app/assets/Services.png"/>
    </div>
        <div class="media-body">    <h3 class="media-heading">Services</h3>
        <p class="lead">Class that encapsulates non-UI logic. Calls to HTTP, logging, data</p>
    </div>
</div>`,
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