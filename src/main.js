"use strict";
require('zone.js/dist/zone');
require('reflect-metadata');
require('es6-shim');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('../app/app.component');
var router_1 = require('@ngrx/router');
var routes_1 = require('../app/routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.provideRouter(routes_1._routes)]);
//# sourceMappingURL=main.js.map