import {Component} from 'angular2/core'
import {AutoGrowDirective} from './app.directive'
@Component({
	selector:'directives',
	template:'<input type="text" autoGrow/>',
	directives:[AutoGrowDirective]
})
export class AppComponent{
}