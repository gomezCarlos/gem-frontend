import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'
 import { Router } from '@angular/router';
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: 'app/login/access.component.html'
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService, 
        private router : Router) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Fallo en la autenticación';
            alert(this.errorMsg);
        }
        else
        
        this.router.navigate(['gems']);
    }
}