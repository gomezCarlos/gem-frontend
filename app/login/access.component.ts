import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService, CookieService],
    templateUrl: 'app/login/access.component.html'
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService, 
        private router : Router,
        private _cookieService:CookieService) {}
 
      getCookie(key: string){
          return this._cookieService.get(key);
      }

    login() {
        if(!this._service.login(this.user, this.saludar)){
            
            console.log(this._cookieService.getAll());
        }
        else
        
        this.router.navigate(['gems']);
    }

    saludar(){
        
    }
}