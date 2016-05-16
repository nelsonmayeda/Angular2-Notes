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
                            title: "Components",
                            description: "",
                            note: "app.component.ts\n\nimport {Component} from 'angular2/core'\n@Component({\n\tselector:'appcomponent',\n\ttemplate:'<div></div>'\n})\nexport class AppComponent{}\n\npage.component.ts\n\nimport {AppComponent} from './app.component'\n@Component({\n\ttemplate:'<appcomponent></appcomponent>',\n\tdirectives:[AppComponent]\n})"
                        },
                        {
                            title: "Template Options",
                            description: "Using an external html template",
                            note: "app.component.ts\n\n@Component({\n\tselector:'appcomponent',\n\t//note that this line allows relative paths for templateUrl\n\tmoduleId: __moduleName,\n\ttemplateUrl:'./app.component.html'\n})"
                        },
                        {
                            title: "Directives",
                            description: "",
                            note: "autogrow.directive.ts\n\nimport {Directive} from 'angular2/core'\n@Directive({\n\t//note that the square brackets make selector into an attribute selector, not an element selector\n\tselector:'[autoGrow]',\n\thost:{'(focus)':'onFocus()'}\n})\nexport class AutoGrowDirective{\n\tconstructor(private _el:ElementRef, private _renderer:Renderer){}\n\tonFocus(){\n\t\tthis._renderer.setElementStyle(this._el.nativeElement, 'width', '200');\n\t}\n}\n\napp.component.ts\n\nimport {AutoGrowDirective} from './autogrow.directive'\n@Component({\n\ttemplate:'<input type=\"text\" autoGrow/>',\n\tdirectives:[AutoGrowDirective]\n})"
                        },
                        {
                            title: "Services",
                            description: "",
                            note: "app.service.ts\n                \nexport class AppService{\n\tgetItems(){\n\t\treturn [\"a\",\"b\",\"c\"];}\n}\n\napp.component.ts\n\nimport {ItemsService} from './app.service'\n@Component({\n    template:'<li *ngFor=\"let item of items\"></li>',\n\tproviders:[AppService]\n})\nexport class AppComponent{\n\titems;\n\tconstructor(itemsService: AppService){\n\t\tthis.items = itemsService.getItems();\n\t}\n}"
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