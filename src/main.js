System.register(['zone.js/dist/zone', 'reflect-metadata', 'es6-shim', '@angular/platform-browser-dynamic', '../app/app.component', '@ngrx/router', '../app/routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, router_1, routes_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.provideRouter(routes_1._routes)]);
        }
    }
});
//# sourceMappingURL=main.js.map