import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `app/login/access.component.html`
})
 
export class LoginComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Fallo en la autenticación';
        }
    }
}