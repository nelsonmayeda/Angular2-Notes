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
var core_1 = require('@angular/core');
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.isFavorite = false;
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
    };
    FavoriteComponent = __decorate([
        core_1.Component({
            selector: 'favorite',
            template: "\n\t\t<i \n\t\t\tclass = \"glyphicon\"\n\t\t\t[class.glyphicon-star-empty]=\"!isFavorite\"\n\t\t\t[class.glyphicon-star]=\"isFavorite\"\n\t\t\t(click)=\"onClick()\">\n\t\t</i>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=favorite.component.js.map