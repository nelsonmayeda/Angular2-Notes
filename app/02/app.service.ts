export class AppService{
    getNotes(){
        return [
          {
                title:"Modules",
                description:"Angular Modules help organize an application into cohesive blocks of functionality.",
                note: 
`app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

main.ts

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);`
            } ,
          {
                title:"Components",
                description:"A component is the combination of an HTML template and a component class that controls a portion of the screen.",
                note: 
`app.component.ts

import {Component} from 'angular2/core'
@Component({
	selector:'appcomponent',
	template:'<div></div>'
})
export class AppComponent{}

page.component.ts

import {AppComponent} from './app.component'
@Component({
	template:'<appcomponent></appcomponent>',
	directives:[AppComponent]
})`
            } ,
          {
                title:"Directives",
                description:"",
                note: 
`autogrow.directive.ts

import {Directive} from 'angular2/core'
@Directive({
	//note that the square brackets make selector into an attribute selector, not an element selector
	selector:'[autoGrow]',
	host:{'(focus)':'onFocus()'}
})
export class AutoGrowDirective{
	constructor(private _el:ElementRef, private _renderer:Renderer){}
	onFocus(){
		this._renderer.setElementStyle(this._el.nativeElement, 'width', '200');
	}
}

app.component.ts

import {AutoGrowDirective} from './autogrow.directive'
@Component({
	template:'<input type="text" autoGrow/>',
	directives:[AutoGrowDirective]
})`
            }  ,
          {
                title:"Services",
                description:"",
                note: 
`app.service.ts
                
export class AppService{
	getItems(){
		return ["a","b","c"];}
}

app.component.ts

import {ItemsService} from './app.service'
@Component({
    template:'<li *ngFor="let item of items"></li>',
	providers:[AppService]
})
export class AppComponent{
	items;
	constructor(itemsService: AppService){
		this.items = itemsService.getItems();
	}
}`
            }  
        ];
    }
}