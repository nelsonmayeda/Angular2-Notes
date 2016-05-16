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
                            title: "Template-driven Form",
                            description: "",
                            note: ""
                        },
                        {
                            title: "Control",
                            description: "",
                            note: ""
                        },
                        {
                            title: "ControlGroup",
                            description: "",
                            note: ""
                        },
                        {
                            title: "ngControl",
                            description: "",
                            note: ""
                        },
                        {
                            title: "Validation Errors",
                            description: "",
                            note: ""
                        },
                        {
                            title: "ngForm",
                            description: "",
                            note: ""
                        },
                        {
                            title: "Disabling Submit Button",
                            description: "",
                            note: ""
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