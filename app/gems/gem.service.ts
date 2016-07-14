import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { Gem } from './gem';

interface IServerResponse {
    items: Gem[];
    total: number;
}

@Injectable()
export class GemService {

	urlBackend : string = "http://127.0.0.3:7890/api/v1/gems";

	constructor( private http: Http){

	}

	private getData(r: Response) { let body = r.json(); return body._embedded.gems; }

	private getPaginatedData(r: Response){
		let body = r.json();
		
		return Observable.of({items: body._embedded.gems,total: body.page.totalElements});
	}

	private getSingleData(r: Response) { let body = r.json();
	
		return body; 
	}
	private getResponse(r: Response) { let body = r; return body;}

	private getError(error: any) { return Observable.throw(error); }

	private getOptions(){
		let headers = new Headers({
			'Content-Type':'application/json',
			'Access-Control-Allow-Origin': '*'
		})
		let options = new RequestOptions({headers: headers})
		return options;
	}

	getGems(): Observable<Gem[]>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = new RequestOptions({ headers: headers });
		return this.http.get(this.urlBackend,requestOptions)
			.map(this.getData)
			.catch(this.getError)
			;
	}

	getById(id : number): Observable<Gem>{
		return this.http.get(this.urlBackend+"/"+id)
		.map(this.getSingleData)
		.catch(this.getError);
	}

	getByUrl(url : string): Observable<Gem>{
		return this.http.get(url)
		.map(this.getSingleData)
		.catch(this.getError);
	}

	save(gem : Gem): Observable<Gem>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = new RequestOptions({ headers: headers });
		let url ='';
		
		if(gem.gemId!=null){
			url = this.urlBackend+"/"+gem.gemId;
					return this.http.put(url,JSON.stringify(gem),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}
		else{
			url = this.urlBackend;
					return this.http.post(url,JSON.stringify(gem),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}

	}

	delete(gem : Gem): Observable<Response>{
		return this.http.delete(this.urlBackend+"/"+gem.gemId,this.getOptions).map(this.getResponse).catch(this.getError);
	}

	getPage(page: number): Observable<IServerResponse>{
		const perPage = 10;
		let params = new URLSearchParams();
		params.set("size",perPage.toString());
		params.set("page",page.toString());
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    	let requestOptions = new RequestOptions({ headers: headers, search: params });
		
		return this.http.get(this.urlBackend,requestOptions)
			.map(this.getPaginatedData)
			.catch(this.getError)
			;
	}
}
