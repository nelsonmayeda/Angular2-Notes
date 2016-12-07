"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "Modules",
                description: "Angular Modules help organize an application into cohesive blocks of functionality.",
                note: "app.module.ts\n\nimport { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports:      [ BrowserModule ],\n  declarations: [ AppComponent ],\n  bootstrap:    [ AppComponent ]\n})\nexport class AppModule { }\n\nmain.ts\n\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app.module';\nplatformBrowserDynamic().bootstrapModule(AppModule);"
            },
            {
                title: "Components",
                description: "A component is the combination of an HTML template and a component class that controls a portion of the screen.",
                note: "app.component.ts\n\nimport {Component} from 'angular2/core'\n@Component({\n\tselector:'appcomponent',\n\ttemplate:'<div></div>'\n})\nexport class AppComponent{}\n\npage.component.ts\n\nimport {AppComponent} from './app.component'\n@Component({\n\ttemplate:'<appcomponent></appcomponent>',\n\tdirectives:[AppComponent]\n})"
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
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map