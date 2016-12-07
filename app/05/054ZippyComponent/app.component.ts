import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <zippy title="Who can see my stuff?">
            Content of who can see my stuff
        </zippy>
        <zippy title="Who can contact me?">
            Content of who can contact me
        </zippy>
    `
})
export class AppComponent {
}