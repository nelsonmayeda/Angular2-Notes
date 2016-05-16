import { Routes } from '@ngrx/router';

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


export const _routes: Routes = [
    { 
        path: '/', 
        component: GettingStartedwithAngular2 },
    { 
        path: '/GettingStartedwithAngular2', 
        component: GettingStartedwithAngular2 },
    { 
        path: '/Angular2Jumpstart', 
        component: Angular2Jumpstart },
    { 
        path: '/DisplayingDataandHandlingFunctions',
        component: DisplayingDataandHandlingFunctions },
    { 
        path: '/BuildingReusableComponents',
        component: BuildingReusableComponents },
    { 
        path: '/ControllingRenderingofHTML', 
        component: ControllingRenderingofHTML },
    { 
        path: '/BuildingFormswithBasicValidation',
        component: BuildingFormswithBasicValidation },
    { 
        path: '/BuildingFormswithComplexValidation', 
        component: BuildingFormswithComplexValidation },
    { 
        path: '/IntroductiontoReactiveExtensions', 
        component: IntroductiontoReactiveExtensions },
    { 
        path: '/ConnectingtotheServer', 
        component: ConnectingtotheServer },
    { 
        path: '/BuildingSinglePageApps', 
        component: BuildingSinglePageApps }
];