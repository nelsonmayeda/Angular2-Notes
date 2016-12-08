"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AutoGrowDirective = (function () {
    function AutoGrowDirective(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    AutoGrowDirective.prototype.onFocus = function () {
        this._renderer.setElementStyle(this._el.nativeElement, 'width', '400');
    };
    AutoGrowDirective.prototype.onBlur = function () {
        this._renderer.setElementStyle(this._el.nativeElement, 'width', '200');
    };
    return AutoGrowDirective;
}());
AutoGrowDirective = __decorate([
    core_1.Directive({
        //note that the square brackets make selector into an attribute selector, not an element selector
        selector: '[autoGrow]',
        host: {
            '(focus)': 'onFocus()',
            '(blur)': 'onBlur()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], AutoGrowDirective);
exports.AutoGrowDirective = AutoGrowDirective;
//# sourceMappingURL=app.directive.js.map