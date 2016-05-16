System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppService;
    return {
        setters:[],
        execute: function() {
            AppService = (function () {
                function AppService() {
                }
                AppService.prototype.getNotes = function () {
                    return [
                        {
                            title: "Enabling Routing",
                            description: "",
                            note: "\t--index.html\n\t<head>\n\t\t<base href=\"/\">\n\t</head>\n\t<script src = \"node_modules/angular2/bundles/router.dev.js/>\n\t--boot.ts\n\timport {ROUTER_PROVIDERS} from 'angular2/router'\n\tbootstrap(AppComponent, [ROUTER_PROVIDERS]}"
                        },
                        {
                            title: "Configuring Routes",
                            description: "",
                            note: "\t--app.component.ts\n\t@RouteConfig([\n\t\t{ path: '/', name: 'Home', component: HomeComponent },\n\t\t{ path: '/archives/:year/:month', name: 'Archives', component: ArchivesComponent },\n\t\t{ path: '/*other', name: 'Other', redirectTo: ['Home'] }\n\t])"
                        },
                        {
                            title: "Router Outlet",
                            description: "",
                            note: "\t--app.component.ts\n\t@Component({\n\t\tselector: 'my-app',\n\t\ttemplate: '<router-outlet></router-outlet>',\n\t\tdirectives: [ROUTER_DIRECTIVES]\n\t})"
                        },
                        {
                            title: "Adding Links",
                            description: "",
                            note: "\t@Component({\n\t\ttemplate: \n\t\t\t<h1>Home Page</h1>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"#archive of archives\">\n\t\t\t\t\t<a [routerLink]=\"['Archives', { year: archive.year, month: archive.month }]\">\n\t\t\t\t\t\t{{ archive.year }}/{{ archive.month }}\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t,\n\t\tdirectives: [RouterLink]\n\t})"
                        },
                        {
                            title: "Route Parameters",
                            description: "",
                            note: "\texport class ArchivesComponent {\n\t\tyear: number;\n\t\tmonth: number;\n\t\t\n\t\tconstructor(private _routeParams: RouteParams){\n\t\t\tthis.year = parseInt(_routeParams.get(\"year\"));\n\t\t\tthis.month = parseInt(_routeParams.get(\"month\"));\n\t\t}\n\t}"
                        },
                        {
                            title: "Imperative Navigation",
                            description: "",
                            note: "\timport {Router} from 'angular2/router';\n\texport class ContactComponent{\n\t\tconstructor(private _router:Router}{}\n\t\tonSubmit(form){this._router.navigate(['Albums']);}\n\t}"
                        },
                        {
                            title: "Implementing Dirty Checking",
                            description: "CanDeactivate runs before navigating away from current page",
                            note: "\timport {Router, CanDeactivate} from 'angular2/router';\n\texport class ContactComponent implements CanDeactivate{\n\t\tformVar;\n\t\tconstructor(fb:FormBuilder, private _router:Router}{this.formVar = fb.group({name:[],comment:[]});}\n\t\tonSubmit(form){this._router.navigate(['Albums']);}\n\t\trouterCanDeactivate(next,previous){\n\t\t\tif(this.formVar.dirty)\n\t\t\t\treturn confirm(\"Are you sure\");\n\t\t\treturn true;\n\t\t}\n\t}"
                        },
                        {
                            title: "Structuring Large Apps",
                            description: "",
                            note: "\n\torganize into feature areas ie. /app/subdomains/parameters\n\tkeep shared components in /shared\n\t/events/... the three dots are an incomplete route\n\ton the EventsComponent you will have finished routes or more ...\n\t@RouteConfig([\n\t\t{\n\t\t\tpath:'/events/...',\n\t\t\tname:'Events',\n\t\t\tcomponent:'EventsComponent'\n\t\t},\n\t\t{\n\t\t\tpath:'/hangouts/...',\n\t\t\tname:'Hangouts',\n\t\t\tcomponent:'HangoutsComponent'\n\t\t}\n\t])"
                        }
                    ];
                };
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=app.service.js.map