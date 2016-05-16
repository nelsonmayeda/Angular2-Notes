import {Component} from '@angular/core'
import {AutoGrowDirective} from './app.directive'
@Component({
	selector:'directives',
	template:'<input type="text" autoGrow/>',
	directives:[AutoGrowDirective]
})
export class AppComponent{
}