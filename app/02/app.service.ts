export class AppService{
    getNotes(){
        return [
          {
                title:"Components",
                description:"",
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
                title:"Template Options",
                description:"Using an external html template",
                note: 
`app.component.ts

@Component({
	selector:'appcomponent',
	//note that this line allows relative paths for templateUrl
	moduleId: __moduleName,
	templateUrl:'./app.component.html'
})`
            }   ,
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