import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AppComponent as ZippyComponent} from './054ZippyComponent/app.component';
import {SubscriptionFormComponent} from './066Template-driven Forms/subscription-form.component';
import {AppComponent as SignUpForm} from './069SignUpForm/app.component';
import {ChangePasswordFormComponent} from './077Model-driven Forms/change-password-form.component';
import {AppComponent as SeedForObservables} from './081SeedForObservables/app.component';
import {GitHubProfileComponent} from './101Connecting to the Server/github-profile.component';

  { path: '/ZippyComponent', name: 'ZippyComponent', component: ZippyComponent },
    { path: '/SubscriptionFormComponent', name: 'SubscriptionFormComponent', component: SubscriptionFormComponent },
    { path: '/SignUpForm', name: 'SignUpForm', component: SignUpForm },
    { path: '/ChangePasswordFormComponent', name: 'ChangePasswordFormComponent', component: ChangePasswordFormComponent },
    { path: '/SeedForObservables', name: 'SeedForObservables', component: SeedForObservables },
    { path: '/GitHubProfileComponent', name: 'GitHubProfileComponent', component: GitHubProfileComponent },
    
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'solution-index',
    moduleId: __moduleName,
    templateUrl: './index.html',
    directives: [ROUTER_DIRECTIVES]
})
export class IndexComponent {
}