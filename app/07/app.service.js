"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "Create Control Explicitly: Model-driven form",
                description: "",
                note: "\timport {ControlGroup,Control} from 'angular2/common'\n@Component({\n    template:'<form [ngFormModel]=\"formVar\" ><input ngControl=\"comment\"/></form>\n})\nexport class FormComponent{\n    formVar = new ControlGroup({\n        comment: new Control()\n    });\n}"
            },
            {
                title: "FormBuilder",
                description: "more compact, allows injection",
                note: "\timport {FormBuilder} from 'angular2/common'\n\texport class ContactComponent{\n\t\tformVar;\n\t\tconstructor(fb:FormBuilder}{this.formVar = fb.group({comment:[]});}\n\t}"
            },
            {
                title: "Validation",
                description: "",
                note: "\timport {Validators} from 'angular2/common'\n\t@Component({\n\t\ttemplate:'\n\t\t\t<form [ngFormModel]=\"formVar\" >\n\t\t\t\t<input ngControl=\"comment\"/>\n\t\t\t</form>'})\n\texport class FormComponent{\n\t\tformVar = new ControlGroup({\n\t\t\tcomment: new Control('defaultValue',Validators.required)\n\t\t});\n\t}"
            },
            {
                title: "Valid Errors",
                description: "",
                note: "\t@Component({\n\t\ttemplate:'\n\t\t\t<form [ngFormModel]=\"formVar\" >\n\t\t\t\t<input #=\"nametemp\"/>\n\t\t\t\t<div *ngIf=\"!nametemp.valid\">Username is invalid</div>\n\t\t\t</form>'})\n\texport class FormComponent{\n\t\tformVar = new ControlGroup({\n\t\t\tcomment: new Control('defaultValue',Validators.required)\n\t\t});\n\t}"
            },
            {
                title: "Custom Validation",
                description: "",
                note: "\t--validator.component\n\texport class UsernameValidators{\n\t\tstatic isEmpty(someControl:Control){\n\t\t\tif(someControl){\n\t\t\t\treturn{isEmpty:true};\n\t\t\t}\n\t\t\treturn null;\n\t\t}\n\t}\n\t--app.component\n\timport {UsernameValidators} from './validator.component'\n\texport class FormComponent{\n\t\tformVar = new ControlGroup({\n\t\t\tcomment: new Control('',Validators.compose([UsernameValidators.isEmpty]))\n\t\t});"
            },
            {
                title: "Async Validation",
                description: "",
                note: "\t--validator.component\n\texport class UsernameValidators{\n\t\tstatic isUnique(someControl:Control){\n\t\t\treturn new Promise((resolve,reject)=>{\n\t\t\t\t//server call with callback function that uses \"resolve\"\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tif(control.value ==\"test\"){\n\t\t\t\t\t\tresolve({isUnique:true});\n\t\t\t\t\telse\n\t\t\t\t\t\tresolve({isUnique:false});\n\t\t\t\t\t}\n\t\t\t\t},1000)\n\t\t\t});\n\t\t}\n\t}\n\t--app.component\n\timport {UsernameValidators} from './validator.component'\n\texport class FormComponent{\n\t\tformVar = new ControlGroup({\n\t\t\t//note that this is the third parameter for async\n\t\t\tcomment: new Control('',,UsernameValidators.isUnique)\n\t\t});"
            },
            {
                title: "Loader Image",
                description: "",
                note: "\t<input #somevar=\"ngForm\"/>\n\t<div *ngIf=\"somevar.control.pending\">Checking...</div>"
            },
            {
                title: "Validating Upon Form Submit",
                description: "",
                note: "\t<form>\n\t\t<div *ngIf=\"form.errors.invalidForm\" >Invalid form</div>\n\t<form>\n\t\n\texport class FormComponent{\n\t\tonSubmit(){\n\t\t\tvar result = authService.login(this.form.value);\n\t\t\tthis.form.setErrors({invalidForm:true});\n\t\t}"
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map