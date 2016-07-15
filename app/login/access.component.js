"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var authentication_service_1 = require('./authentication.service');
var router_1 = require('@angular/router');
var core_2 = require('angular2-cookie/core');
var LoginComponent = (function () {
    function LoginComponent(_service, router, _cookieService) {
        this._service = _service;
        this.router = router;
        this._cookieService = _cookieService;
        this.user = new authentication_service_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user, this.saludar)) {
            console.log(this._cookieService.getAll());
        }
        else
            this.router.navigate(['gems']);
    };
    LoginComponent.prototype.saludar = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [authentication_service_1.AuthenticationService, core_2.CookieService],
            templateUrl: 'app/login/access.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, core_2.CookieService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=access.component.js.map