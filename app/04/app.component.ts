import {Component} from 'angular2/core';

import {LikeComponent} from './036LikeComponent/like.component';
import {VoterComponent} from './038VoterComponent/voter.component';
import {AppComponent as Twitter} from './040Twitter/app.component';

@Component({
    selector: 'component',
    template: `
Section 4
Building Re-usable Components
            <like></like>
            <voter></voter>
            <twitter></twitter>
            `,
    directives: [LikeComponent,VoterComponent,Twitter ]
})
export class AppComponent {
}