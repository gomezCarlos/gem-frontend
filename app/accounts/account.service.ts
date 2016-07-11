import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Account } from './account';


@Injectable()
export class AccountService  {

	urlBackend : string = "http://127.0.0.3:7890/api/v1/accounts";

	private getData(r: Response) { let body = r.json(); return body._embedded.accounts; }

	private getSingleData(r: Response) { let body = r.json();
	
		return body; 
	}
	private getResponse(r: Response) { let body = r; return body;}

	private getError(error: any) { return Observable.throw(error); }

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

	getAccounts(): Observable<Account[]>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = new RequestOptions({ headers: headers });
		return this.http.get(this.urlBackend,requestOptions)
			.map(this.getData)
			.catch(this.getError)
			;
	}

	getById(id : number): Observable<Account>{
		return this.http.get(this.urlBackend+"/"+id)
		.map(this.getSingleData)
		.catch(this.getError);
	}

	getByUrl(url : string): Observable<Account>{
		return this.http.get(url)
		.map(this.getSingleData)
		.catch(this.getError);
	}

	save(account : Account): Observable<Account>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = new RequestOptions({ headers: headers });
		let url ='';
		
		if(account.ids!=null){
			url = this.urlBackend+"/"+account.ids;
					return this.http.put(url,JSON.stringify(account),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}
		else{
			url = this.urlBackend;
					return this.http.post(url,JSON.stringify(account),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}

	}

	delete(account : Account): Observable<Response>{
		return this.http.delete(this.urlBackend+"/"+account.ids,this.getOptions).map(this.getResponse).catch(this.getError);
	}
}