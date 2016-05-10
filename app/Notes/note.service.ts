import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class NoteService{
	getTopics(){
		return Observable.from(["Author1","Author2","Author3"]);
	}
}