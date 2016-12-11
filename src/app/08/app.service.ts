export class AppService{
    getNotes(){
        return [
          {
                title:"Callback Hell",
                description:"",
                note: `	nested callbacks
	harder to read than flat code that essentially "awaits" last line
	parallel, series, and combinations not handled. everything is done as a waterfall
	have to handle errors in each one`
            }  ,
          {
                title:"Creating Observables",
                description:"",
                note: `	Observable.empty()
		returns an empty observable that terminates normally
	Observable.never()
		returns an empty observable that never terminates
	Observable.throw()
		returns an empty observable that throws an error
	Observable.from
	Observable.fromPromise(somePromise)
	Observable.fromArray([1, 2, 3])
		returns an observable with the same number of items as base
	Observable.fromEvent(_form, "keyup");
	Observable.of([1, 2, 3])
		returns an observable of one item
	Observable.range(1, 5)
		returns an observable with five items
	DOM Events
	Web Sockets
	AJAX`
            }  ,
          {
                title:"Transforming Observables",
                description:"",
                note: `	.map(x=>x*2)
		transform each item
	.flatMap(x=>return Observable.fromPromise())
		if map function uses async function, it will return an observable for each value
		.map(x=>Observable.timer(100))
		so you would have to merge all the items following two statements do the same thing
		.map(x=>Observable.timer(100).mergeAll())
		.flatmap(x=>Observable.timer(100))`
            }  ,
          {
                title:"Filtering Observables",
                description:"",
                note: `	.debounce(300)
		throttle calling for specificed milliseconds
	.distinct()
		emits items that have not been emitted before
	.distinctUntilChanged()
		emits items that are different from the previous item
	.elementAt(3)
		emit only item n emitted by an Observable
	.filter(x=>x ==3)
		emit only those items from an Observable that pass a predicate test
	.ignoreElements()
		don't emit elements, only the completed signal
	.last()
		emit only the last item emitted by an Observable
	.skip(3)
		skip n emissions
	.take(3)
		take n emissions then complete`
            }  ,
          {
                title:"Combining Observables",
                description:"",
                note: `	Observable.forkJoin(
		this._gitHubService.getUser(this.username), 
		this._gitHubService.getFollowers(this.username)
	)
	.subscribe(
		res => {
			this.user = res[0];
			this.followers = res[1];
		}, 
		null, 
		() => { this.isLoading = false; })`
            }  ,
          {
                title:"Cancelling Subscriptions",
                description:"",
                note: `	var subscription = keyups.subscribe(data=>console.log(data));
	subscription.unsubscribe();`
            }  ,
          {
                title:"Error Handling",
                description:"",
                note: ``
            }  ,
          {
                title:"Importing Operators",
                description:"",
                note: ``
            }  
        ];
    }
}