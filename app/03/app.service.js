"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "Property Binding",
                description: "",
                note: "@Component({<img [src]=\"someVar\"/>})\n<img bind-src=\"someVar\"/>"
            },
            {
                title: "Expression Binding",
                description: "slower, possibly leaves binding expression on screen",
                note: "<img src=\"{{ someVar + anotherVar}}\"/>\nexport class AppComponent{someVar = \"www.image.com\";anotherVar = \"/xyz.png\";}"
            },
            {
                title: "Class Binding",
                description: "",
                note: "<li [class.someClass]=\"someVar\"/>"
            },
            {
                title: "Style Binding",
                description: "",
                note: "<button [style.background]=\"someVar\"/>"
            },
            {
                title: "Event Binding",
                description: "",
                note: "<button (click)=\"someFunc($event)\"/>\nexport class AppComponent{someFunc(e){}}"
            },
            {
                title: "Two-way Binding",
                description: "",
                note: "//note that ngModel has hardcoded directives for [value] and (input)\n//essentially being <input type=\"text\" [value]=\"someVar\" (input)=\"someVar = $event.target.value\"\n<input type=\"text\" [(ngModel)]=\"someVar\"/>\n<input type=\"text\" bindon-ngModel=\"someVar\"/>"
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map