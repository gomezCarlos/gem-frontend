import { Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { Task } from './task';

interface IServerResponse {
    items: any[];
    total: number;
}

@Injectable()
export class TaskService {

	urlBackend : string = "http://127.0.0.3:7890/api/v1/tasks";

	constructor( private http: Http){

	}

	private getData(r: Response) { let body = r.json(); return body._embedded.tasks; }

	private getSingleData(r: Response) { let body = r.json(); return body; }

	private getError(error: any) { return Observable.throw(error); }

	private getResponse(r: Response) { let body = r; return body;}

	private getOptions(){
		let headers = new Headers({
			'Content-Type':'application/json',
			'Access-Control-Allow-Origin': '*'
		})
		let options = new RequestOptions({headers: headers})
		return options;
	}

	getTasks(): Observable<Task[]>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
		let params = new URLSearchParams();
		params.set("sort","name");
    	let requestOptions = new RequestOptions({ headers: headers, search: params });

		return this.http.get(this.urlBackend,requestOptions)
			.map(this.getData)
			.catch(this.getError)
			;
	}

	getById(id : number): Observable<Task>{
		return this.http.get(this.urlBackend+"/"+id)
		.map(this.getSingleData)
		.catch(this.getError);
	}

	save(task : Task): Observable<Task>{
		let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    	let requestOptions = new RequestOptions({ headers: headers });
		let url ='';
		
		if(task.ids!=null){
			url = this.urlBackend+"/"+task.ids;
					return this.http.put(url,JSON.stringify(task),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}
		else{
			url = this.urlBackend;
					return this.http.post(url,JSON.stringify(task),requestOptions)
					.map(this.getSingleData)
					.catch(this.getError)
		}

	}

	delete(task : Task): Observable<Response>{
		return this.http.delete(this.urlBackend+"/"+task.ids,this.getOptions).map(this.getResponse).catch(this.getError);
	}
}