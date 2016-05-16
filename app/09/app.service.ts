export class AppService{
    getNotes(){
        return [
          {
                title:"RESTful API",
                description:"",
                note: `	Representational state transfer: GET, PUT, POST, DELETE
	stateless server: same call gets same data`
            },  
          {
                title:"get Data",
                description:"",
                note: `get Data
	import {Http} from 'angular2/http';
    getUser(username){
		return this._http.get(this._baseUrl + username)
			.map(res => res.json());
    }`
            },  
          {
                title:"send Data",
                description:"",
                note: `	createPost(post){
		return this._http.post(this._baseUrl,JSON.stringify(post))
			.map(res => res.json());
	}`
            },  
          {
                title:"Component Lifecycle Hooks",
                description:"",
                note: `	import {Component, OnInit} from 'angular2/core';
	export class GitHubProfileComponent implements OnInit {
		ngOnInit(){
			this._postService.getPosts().subscribe(x=>console.log(x));
		}
	}
	OnDestroy
	DoCheck
	OnChanges
	AfterContentInit
	AfterContentChecked
	AfterViewInit
	AfterViewChecked`
            },  
          {
                title:"Static Type Checking",
                description:"used for intellisense",
                note: `	export interface Post{
		userId:number;
		id?:number
	}
	getPosts():Observable<Post[]>{
		return this._http.get(this._baseUrl + username)
			.map(res => res.json());
	}`
            },  
          {
                title:"Promises",
                description:"",
                note: `	.map()
	.toPromise();`
            },  
          {
                title:"CORS/JSONP",
                description:"",
                note: `	JSONP only supports get requests
	providers:[JSONP_PROVIDERS]
	export class PostService{
		constructor(private _jsonp:Jsonp){}
		getPosts(){return this._jsonp.get("url");}
	}
	CORS has to enable your domain from their server
	var headers = new Headers({"access-control-request-method":"POST"});
	var optinons = new RequestOptions({headers:headers});
	this._http.get("url", options);`
            }
        ];
    }
}