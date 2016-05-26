"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getNotes = function () {
        return [
            {
                title: "Callback Hell",
                description: "",
                note: "\tnested callbacks\n\tharder to read than flat code that essentially \"awaits\" last line\n\tparallel, series, and combinations not handled. everything is done as a waterfall\n\thave to handle errors in each one"
            },
            {
                title: "Creating Observables",
                description: "",
                note: "\tObservable.empty()\n\t\treturns an empty observable that terminates normally\n\tObservable.never()\n\t\treturns an empty observable that never terminates\n\tObservable.throw()\n\t\treturns an empty observable that throws an error\n\tObservable.from\n\tObservable.fromPromise(somePromise)\n\tObservable.fromArray([1, 2, 3])\n\t\treturns an observable with the same number of items as base\n\tObservable.fromEvent(_form, \"keyup\");\n\tObservable.of([1, 2, 3])\n\t\treturns an observable of one item\n\tObservable.range(1, 5)\n\t\treturns an observable with five items\n\tDOM Events\n\tWeb Sockets\n\tAJAX"
            },
            {
                title: "Transforming Observables",
                description: "",
                note: "\t.map(x=>x*2)\n\t\ttransform each item\n\t.flatMap(x=>return Observable.fromPromise())\n\t\tif map function uses async function, it will return an observable for each value\n\t\t.map(x=>Observable.timer(100))\n\t\tso you would have to merge all the items following two statements do the same thing\n\t\t.map(x=>Observable.timer(100).mergeAll())\n\t\t.flatmap(x=>Observable.timer(100))"
            },
            {
                title: "Filtering Observables",
                description: "",
                note: "\t.debounce(300)\n\t\tthrottle calling for specificed milliseconds\n\t.distinct()\n\t\temits items that have not been emitted before\n\t.distinctUntilChanged()\n\t\temits items that are different from the previous item\n\t.elementAt(3)\n\t\temit only item n emitted by an Observable\n\t.filter(x=>x ==3)\n\t\temit only those items from an Observable that pass a predicate test\n\t.ignoreElements()\n\t\tdon't emit elements, only the completed signal\n\t.last()\n\t\temit only the last item emitted by an Observable\n\t.skip(3)\n\t\tskip n emissions\n\t.take(3)\n\t\ttake n emissions then complete"
            },
            {
                title: "Combining Observables",
                description: "",
                note: "\tObservable.forkJoin(\n\t\tthis._gitHubService.getUser(this.username), \n\t\tthis._gitHubService.getFollowers(this.username)\n\t)\n\t.subscribe(\n\t\tres => {\n\t\t\tthis.user = res[0];\n\t\t\tthis.followers = res[1];\n\t\t}, \n\t\tnull, \n\t\t() => { this.isLoading = false; })"
            },
            {
                title: "Cancelling Subscriptions",
                description: "",
                note: "\tvar subscription = keyups.subscribe(data=>console.log(data));\n\tsubscription.unsubscribe();"
            },
            {
                title: "Error Handling",
                description: "",
                note: ""
            },
            {
                title: "Importing Operators",
                description: "",
                note: ""
            }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map