import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router';

@Component({
    template: `
        <h1>Archives</h1>
        {{ year }} / {{ month }} 
    `
})
export class ArchivesComponent {
    year: number;
    month: number;
    
    constructor(private _routeParams: RouteParams){
        this.year = parseInt(_routeParams.get("year"));
        this.month = parseInt(_routeParams.get("month"));
    }
}