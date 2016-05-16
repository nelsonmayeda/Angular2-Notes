import {Component} from '@angular/core';
import {SignUpFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    directives: [SignUpFormComponent],
    template: `
        <signup-form></signup-form>
    `
})
export class AppComponent {
}