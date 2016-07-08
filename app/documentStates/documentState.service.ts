import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { DocumentState } from './documentState';


@Injectable()
export class DocumentStateService  {
	
	urlBackend : string = "http://127.0.0.3:7890/api/v1/documentStates";

	private getData(r: Response) { let body = r.json(); return body._embedded.documentStates; }

	private getError(error: any) { return Observable.throw(error); }

	private getResponse(r: Response) { let body = r; return body;}

	constructor( private http: Http){
	}

	private getOptions(){
		let headers = new Headers({
			'Content-Type':'application/json',
			'Access-Control-Allow-Origin': '*'
		})
		let options = new RequestOptions({headers: headers})
		return options;
	}

	get(): Observable<DocumentState[]>{
		return this.http.get(this.urlBackend,this.getOptions).map(this.getData).catch(this.getError);
	}

	delete(documenState: DocumentState): Observable<Response>{
		return this.http.delete(this.urlBackend+"/"+documenState.ids,this.getOptions).map(this.getResponse).catch(this.getError);
	}

}