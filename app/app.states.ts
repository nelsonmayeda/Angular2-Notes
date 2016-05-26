import {AppComponent} from "./app.component";
import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";

import {AppComponent as Sidebar} from './shared/app.component';

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
// The top level states
let MAIN_STATES: Ng2StateDeclaration[] = [
    // <ui-view></ui-view> (defined in index.html)
    { 
        name: 'app',
        component: AppComponent,
        abstract:true
    }
];
// App.Second level states
let APP_STATES: Ng2StateDeclaration[] = [
    // <ui-view></ui-view> (defined in AppComponent)
    { 
        name:'app.Default',
        url:'',
        views: {
            $default: {component: GettingStartedwithAngular2},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.GettingStartedwithAngular2',
        url: '/GettingStartedwithAngular2', 
        views: {
            $default: {component: GettingStartedwithAngular2},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.Angular2Jumpstart',
        url: '/Angular2Jumpstart', 
        views: {
            $default: {component: Angular2Jumpstart},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.DisplayingDataandHandlingFunctions',
        url: '/DisplayingDataandHandlingFunctions',
        views: {
            $default: {component: DisplayingDataandHandlingFunctions},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.BuildingReusableComponents',
        url: '/BuildingReusableComponents',
        views: {
            $default: {component: BuildingReusableComponents},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.ControllingRenderingofHTML',
        url: '/ControllingRenderingofHTML', 
        views: {
            $default: {component: ControllingRenderingofHTML},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.BuildingFormswithBasicValidation',
        url: '/BuildingFormswithBasicValidation',
        views: {
            $default: {component: BuildingFormswithBasicValidation},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.BuildingFormswithComplexValidation',
        url: '/BuildingFormswithComplexValidation', 
        views: {
            $default: {component: BuildingFormswithComplexValidation},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.IntroductiontoReactiveExtensions',
        url: '/IntroductiontoReactiveExtensions', 
        views: {
            $default: {component: IntroductiontoReactiveExtensions},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.ConnectingtotheServer',
        url: '/ConnectingtotheServer', 
        views: {
            $default: {component: ConnectingtotheServer},
            sidebar: {component: Sidebar}
        }
    },
    { 
        name:'app.BuildingSinglePageApps',
        url: '/BuildingSinglePageApps', 
        views: {
            $default: {component: BuildingSinglePageApps},
            sidebar: {component: Sidebar}
        }
    }
];
// Combine MAIN_STATES, FOO_STATES, and BAR_STATES and export them.
// This array is imported in bootstrap/router.config.ts, then each state is registered
export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES.concat(APP_STATES);
