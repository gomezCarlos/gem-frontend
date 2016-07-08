import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
 
export class User {
  constructor(
    public username: string,
    public password: string) { }
}
 
@Injectable()
export class AuthenticationService {

private loginUrl : string = "http://127.0.0.3:7890/login";

private logoutUrl : string = "http://127.0.0.3:7890/logout";

private csrfToken : string;

private headers: Headers;

    constructor(@Inject(Http) private http:Http, private _router: Router) {
    }

    login(user: User, done: Function) {
        var postData = "username=" + user.username + "&password=" + user.password;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.getCsrfToken().subscribe(
          res => this.csrfToken = res.headers.get('X-CSRF-TOKEN'));
        this.headers.append('X-CSRF-TOKEN', this.csrfToken);

        this.http.post(this.loginUrl, postData, {
                headers: this.headers
            })
            .map((res:any) => res.json())
            .subscribe(
                res => alert(res.status),
                err => this.logError(err),
                () => done()
            );
    }

    logout(){
        this.http.post(this.logoutUrl, {});
    }

    getCsrfToken(): Observable<Response>{
        return this.http.get(this.loginUrl).map((res:Response) => res);
    }


    checkCredentials(){

    }

    logError(err: any) {
        console.log(err);
    }
}