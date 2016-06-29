import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Gem } from './gem';

@Injectable()
export class GemService {

	urlBackend : string = "http://127.0.0.3:7890/api/v1/gems";

	constructor( private http: Http){

	}

	private getData(r: Response) { let body = r.json(); return body._embedded.gems; }

	private getError(error: any) { return Observable.throw(error); }

	private getOptions(){
		let headers = new Headers({
			'Content-Type':'application/json'
		})
		let options = new RequestOptions({headers: headers})
		return options;
	}

	getGems(): Observable<Gem[]>{
		return this.http.get(this.urlBackend)
			.map(this.getData)
			.catch(this.getError)
			;
	}
}
