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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var like_component_1 = require("./036LikeComponent/like.component");
var voter_component_1 = require("./038VoterComponent/voter.component");
var app_component_2 = require("./040Twitter/app.component");
var tweet_component_1 = require("./040Twitter/tweet.component");
var AppModule04 = (function () {
    function AppModule04() {
    }
    return AppModule04;
}());
AppModule04 = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.BuildingReusableComponents, like_component_1.LikeComponent, voter_component_1.VoterComponent, app_component_2.AppComponent, tweet_component_1.TweetComponent],
        bootstrap: [app_component_1.BuildingReusableComponents]
    }),
    __metadata("design:paramtypes", [])
], AppModule04);
exports.AppModule04 = AppModule04;
//# sourceMappingURL=app.module.js.map