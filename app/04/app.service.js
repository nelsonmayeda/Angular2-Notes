"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "Input Property",
                description: "some.component.ts",
                note: "import {Input} from 'angular2/core'"
            },
            {
                title: "Using Input",
                description: "app.component.ts",
                note: "import {SomeComponent} from 'angular2/core'\n<appcomponent [someAlias]=\"true\"></appcomponent>"
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map