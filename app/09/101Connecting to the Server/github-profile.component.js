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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/forkJoin');
var github_service_1 = require('./github.service');
var GitHubProfileComponent = (function () {
    function GitHubProfileComponent(_gitHubService) {
        this._gitHubService = _gitHubService;
        this.isLoading = true;
        this.username = "octocat";
        this.user = {};
        this.followers = [];
    }
    GitHubProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
            .subscribe(function (res) {
            _this.user = res[0];
            _this.followers = res[1];
        }, null, function () { _this.isLoading = false; });
    };
    GitHubProfileComponent = __decorate([
        core_1.Component({
            selector: 'github-profile',
            styles: [
                "\n            .avatar {\n                width: 100;\n                height: 100;\n                border-radius: 100%;\n            }\n        "
            ],
            template: "\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        <h2>@{{ user.login }}</h2>\n        <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n        \n        <h3>Followers</h3>\n        <div *ngFor=\"let follower of followers\" class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object avatar\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ follower.login }}</h4>\n            </div>\n        </div>        \n    ",
            providers: [http_1.HTTP_PROVIDERS, github_service_1.GitHubService]
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubService])
    ], GitHubProfileComponent);
    return GitHubProfileComponent;
}());
exports.GitHubProfileComponent = GitHubProfileComponent;
//# sourceMappingURL=github-profile.component.js.map