import {Directive, ElementRef, Renderer} from 'angular2/core'
@Directive({
	//note that the square brackets make selector into an attribute selector, not an element selector
	selector:'[autoGrow]',
	host:{
		'(focus)':'onFocus()',
		'(blur)':'onBlur()'
	}
})
export class AutoGrowDirective{
	constructor(private _el:ElementRef,private _renderer:Renderer){}
	onFocus(){
		this._renderer.setElementStyle(this._el.nativeElement, 'width', '400');
	}
	onBlur(){
		this._renderer.setElementStyle(this._el.nativeElement, 'width', '200');
	}
}