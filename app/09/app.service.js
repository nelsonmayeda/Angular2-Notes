"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "RESTful API",
                description: "",
                note: "\tRepresentational state transfer: GET, PUT, POST, DELETE\n\tstateless server: same call gets same data"
            },
            {
                title: "get Data",
                description: "",
                note: "get Data\n\timport {Http} from 'angular2/http';\n    getUser(username){\n\t\treturn this._http.get(this._baseUrl + username)\n\t\t\t.map(res => res.json());\n    }"
            },
            {
                title: "send Data",
                description: "",
                note: "\tcreatePost(post){\n\t\treturn this._http.post(this._baseUrl,JSON.stringify(post))\n\t\t\t.map(res => res.json());\n\t}"
            },
            {
                title: "Component Lifecycle Hooks",
                description: "",
                note: "\timport {Component, OnInit} from 'angular2/core';\n\texport class GitHubProfileComponent implements OnInit {\n\t\tngOnInit(){\n\t\t\tthis._postService.getPosts().subscribe(x=>console.log(x));\n\t\t}\n\t}\n\tOnDestroy\n\tDoCheck\n\tOnChanges\n\tAfterContentInit\n\tAfterContentChecked\n\tAfterViewInit\n\tAfterViewChecked"
            },
            {
                title: "Static Type Checking",
                description: "used for intellisense",
                note: "\texport interface Post{\n\t\tuserId:number;\n\t\tid?:number\n\t}\n\tgetPosts():Observable<Post[]>{\n\t\treturn this._http.get(this._baseUrl + username)\n\t\t\t.map(res => res.json());\n\t}"
            },
            {
                title: "Promises",
                description: "",
                note: "\t.map()\n\t.toPromise();"
            },
            {
                title: "CORS/JSONP",
                description: "",
                note: "\tJSONP only supports get requests\n\tproviders:[JSONP_PROVIDERS]\n\texport class PostService{\n\t\tconstructor(private _jsonp:Jsonp){}\n\t\tgetPosts(){return this._jsonp.get(\"url\");}\n\t}\n\tCORS has to enable your domain from their server\n\tvar headers = new Headers({\"access-control-request-method\":\"POST\"});\n\tvar optinons = new RequestOptions({headers:headers});\n\tthis._http.get(\"url\", options);"
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map