export class AppService{
    getNotes(){
        return [
          {
                title:"Enabling Routing",
                description:"",
                note: `	--index.html
	<head>
		<base href="/">
	</head>
	<script src = "node_modules/angular2/bundles/router.dev.js/>
	--boot.ts
	import {ROUTER_PROVIDERS} from 'angular2/router'
	bootstrap(AppComponent, [ROUTER_PROVIDERS]}`
            }  ,
          {
                title:"Configuring Routes",
                description:"",
                note: `	--app.component.ts
	@RouteConfig([
		{ path: '/', name: 'Home', component: HomeComponent },
		{ path: '/archives/:year/:month', name: 'Archives', component: ArchivesComponent },
		{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
	])`
            }  ,
          {
                title:"Router Outlet",
                description:"",
                note: `	--app.component.ts
	@Component({
		selector: 'my-app',
		template: '<router-outlet></router-outlet>',
		directives: [ROUTER_DIRECTIVES]
	})`
            }  ,
          {
                title:"Adding Links",
                description:"",
                note: `	@Component({
		template: 
			<h1>Home Page</h1>
			<ul>
				<li *ngFor="#archive of archives">
					<a [routerLink]="['Archives', { year: archive.year, month: archive.month }]">
						{{ archive.year }}/{{ archive.month }}
					</a>
				</li>
			</ul>
		,
		directives: [RouterLink]
	})`
            }  ,
          {
                title:"Route Parameters",
                description:"",
                note: `	export class ArchivesComponent {
		year: number;
		month: number;
		
		constructor(private _routeParams: RouteParams){
			this.year = parseInt(_routeParams.get("year"));
			this.month = parseInt(_routeParams.get("month"));
		}
	}`
            }  ,
          {
                title:"Imperative Navigation",
                description:"",
                note: `	import {Router} from 'angular2/router';
	export class ContactComponent{
		constructor(private _router:Router}{}
		onSubmit(form){this._router.navigate(['Albums']);}
	}`
            }  ,
          {
                title:"Implementing Dirty Checking",
                description:"CanDeactivate runs before navigating away from current page",
                note: `	import {Router, CanDeactivate} from 'angular2/router';
	export class ContactComponent implements CanDeactivate{
		formVar;
		constructor(fb:FormBuilder, private _router:Router}{this.formVar = fb.group({name:[],comment:[]});}
		onSubmit(form){this._router.navigate(['Albums']);}
		routerCanDeactivate(next,previous){
			if(this.formVar.dirty)
				return confirm("Are you sure");
			return true;
		}
	}`
            }  ,
          {
                title:"Structuring Large Apps",
                description:"",
                note: `
	organize into feature areas ie. /app/subdomains/parameters
	keep shared components in /shared
	/events/... the three dots are an incomplete route
	on the EventsComponent you will have finished routes or more ...
	@RouteConfig([
		{
			path:'/events/...',
			name:'Events',
			component:'EventsComponent'
		},
		{
			path:'/hangouts/...',
			name:'Hangouts',
			component:'HangoutsComponent'
		}
	])`
            } 
        ];
    }
}