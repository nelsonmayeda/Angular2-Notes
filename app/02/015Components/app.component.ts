import {Component} from '@angular/core';
import {AuthorsComponent} from './authors.component';

@Component({
	selector: 'app-component',
	template: `
		<h1>My First Angular 2 App</h1>
		<authors></authors>`,
	directives: [AuthorsComponent]
})
export class AppComponent{}