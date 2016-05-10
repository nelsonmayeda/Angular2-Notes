import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, AuxRoute} from 'angular2/router';

import {AppComponent as GettingStartedwithAngular2} from './01/app.component';
import {AppComponent as Angular2Jumpstart} from './02/app.component';
import {AppComponent as DisplayingDataandHandlingFunctions} from './03/app.component';
import {AppComponent as BuildingReusableComponents} from './04/app.component';
import {AppComponent as ControllingRenderingofHTML} from './05/app.component';
import {AppComponent as BuildingFormswithBasicValidation} from './06/app.component';
import {AppComponent as BuildingFormswithComplexValidation} from './07/app.component';
import {AppComponent as IntroductiontoReactiveExtensions} from './08/app.component';
import {AppComponent as ConnectingtotheServer} from './09/app.component';
import {AppComponent as BuildingSinglePageApps} from './10/app.component';

@RouteConfig([
    { path: '/GettingStartedwithAngular2', name: 'GettingStartedwithAngular2', component: GettingStartedwithAngular2 },
    { path: '/Angular2Jumpstart', name: 'Angular2Jumpstart', component: Angular2Jumpstart },
    { path: '/DisplayingDataandHandlingFunctions', name: 'DisplayingDataandHandlingFunctions', component: DisplayingDataandHandlingFunctions },
    { path: '/BuildingReusableComponents', name: 'BuildingReusableComponents', component: BuildingReusableComponents },
    { path: '/ControllingRenderingofHTML', name: 'ControllingRenderingofHTML', component: ControllingRenderingofHTML },
    { path: '/BuildingFormswithBasicValidation', name: 'BuildingFormswithBasicValidation', component: BuildingFormswithBasicValidation },
    { path: '/BuildingFormswithComplexValidation', name: 'BuildingFormswithComplexValidation', component: BuildingFormswithComplexValidation },
    { path: '/IntroductiontoReactiveExtensions', name: 'IntroductiontoReactiveExtensions', component: IntroductiontoReactiveExtensions },
    { path: '/ConnectingtotheServer', name: 'ConnectingtotheServer', component: ConnectingtotheServer },
    { path: '/BuildingSinglePageApps', name: 'BuildingSinglePageApps', component: BuildingSinglePageApps },
    { path: '/*other', name: 'Other', redirectTo: ['GettingStartedwithAngular2'] }
])

@Component({
    selector: 'my-app',
    moduleId: __moduleName,
    templateUrl: './app.html',
    styleUrls:['./sidebar.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MyAppComponent {
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}