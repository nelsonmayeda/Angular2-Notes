"use strict";
var app_component_1 = require("./app.component");
var app_component_2 = require('./shared/app.component');
var app_component_3 = require('./01/app.component');
var app_component_4 = require('./02/app.component');
var app_component_5 = require('./03/app.component');
var app_component_6 = require('./04/app.component');
var app_component_7 = require('./05/app.component');
var app_component_8 = require('./06/app.component');
var app_component_9 = require('./07/app.component');
var app_component_10 = require('./08/app.component');
var app_component_11 = require('./09/app.component');
var app_component_12 = require('./10/app.component');
// The top level states
var MAIN_STATES = [
    // <ui-view></ui-view> (defined in index.html)
    {
        name: 'app',
        component: app_component_1.AppComponent,
        abstract: true
    }
];
// App.Second level states
var APP_STATES = [
    // <ui-view></ui-view> (defined in AppComponent)
    {
        name: 'app.Default',
        url: '',
        views: {
            $default: { component: app_component_3.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.GettingStartedwithAngular2',
        url: '/GettingStartedwithAngular2',
        views: {
            $default: { component: app_component_3.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.Angular2Jumpstart',
        url: '/Angular2Jumpstart',
        views: {
            $default: { component: app_component_4.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.DisplayingDataandHandlingFunctions',
        url: '/DisplayingDataandHandlingFunctions',
        views: {
            $default: { component: app_component_5.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.BuildingReusableComponents',
        url: '/BuildingReusableComponents',
        views: {
            $default: { component: app_component_6.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.ControllingRenderingofHTML',
        url: '/ControllingRenderingofHTML',
        views: {
            $default: { component: app_component_7.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.BuildingFormswithBasicValidation',
        url: '/BuildingFormswithBasicValidation',
        views: {
            $default: { component: app_component_8.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.BuildingFormswithComplexValidation',
        url: '/BuildingFormswithComplexValidation',
        views: {
            $default: { component: app_component_9.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.IntroductiontoReactiveExtensions',
        url: '/IntroductiontoReactiveExtensions',
        views: {
            $default: { component: app_component_10.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.ConnectingtotheServer',
        url: '/ConnectingtotheServer',
        views: {
            $default: { component: app_component_11.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    },
    {
        name: 'app.BuildingSinglePageApps',
        url: '/BuildingSinglePageApps',
        views: {
            $default: { component: app_component_12.AppComponent },
            sidebar: { component: app_component_2.AppComponent }
        }
    }
];
// Combine MAIN_STATES, FOO_STATES, and BAR_STATES and export them.
// This array is imported in bootstrap/router.config.ts, then each state is registered
exports.INITIAL_STATES = MAIN_STATES.concat(APP_STATES);
//# sourceMappingURL=app.states.js.map