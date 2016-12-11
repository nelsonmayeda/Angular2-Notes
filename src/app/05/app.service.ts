export class AppService{
    getNotes(){
        return [
          {
                title:"ngIf",
                description:"",
                note: `<i class="loading" *ngIf="!isActive"></i>`
            } ,
          {
                title:"ngSwitch",
                description:"",
                note: `<div [ngSwitch]="somevar">
    <div *ngSwitchWhen="'a'" ngSwitchDefault></div>
    <div *ngSwitchWhen="'b'"></div>
</div>`
            } ,
          {
                title:"ngFor",
                description:"",
                note: `<ul><li *ngFor="#item of items"></li>`
            } ,
          {
                title:"Asterisk",
                description:"treat current element as a template",
                note: `<li *ngFor="#item of items"></li>
example without asterisk
<template ngFor="#item of items">
    <li></li>
</template>`
            } ,
          {
                title:"Pipes",
                description:"",
                note: `<div>{{someVar | uppercase}}</div>`
            } ,
          {
                title:"Custom Pipes",
                description:"",
                note: `pipe.component.ts
import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({name:'custompipe'})
export class SummaryPipe implements PipeTransform{
    transform(value:string, args: string[]){
        return "";
    }
}
app.component.ts

import {SummaryPipe} from './app/summarypipe'
@Component({
    template:'<div>{{someVar | custompipe}}',
    pipes:[SummaryPipe]})`
        } ,
          {
                title:"ngClass",
                description:"",
                note: `	<div
[ngClass]="{
    'glyphicon-star-empty':!isFavorite,
    'glyphicon-star':isFavorite
}></div>`
    },
          {
                title:"ngStyle",
                description:"",
                note: `	<div
[ngStyle]="{
    'backgroundColor':isFavorite?'red':'blue',
    'color':isFavorite?'red','blue'
}></div>`
    },
          {
                title:"Elvis Operator",
                description:"null subproperty operator",
                note: `<div>{{task?.assignee?.role?.name}}</div>`
    },
          {
                title:"ng-content Element",
                description:"insertion points for external data",
                note: `@Component({
selector:'appcomponent',
template:'<div><ng-content></ng-content></div>'})
export class AppComponent{}
--
import {AppComponent} from './app/app.component'
@Component({template:'<appcomponent>Insert This Text</appcomponent>',
directives:[AppComponent]})`
    }
    ];
    }
}