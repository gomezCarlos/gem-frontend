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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
var router_1 = require('@angular/router');
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var AuthenticationService = (function () {
    function AuthenticationService(http, _router) {
        this.http = http;
        this._router = _router;
        this.loginUrl = "http:/127.0.0.3:7890/login";
        this.logoutUrl = "http:/127.0.0.3:7890/logout";
    }
    AuthenticationService.prototype.login = function (user, done) {
        var _this = this;
        var postData = "username=" + user.username + "&password=" + user.password;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.getCsrfToken().subscribe(function (res) { return _this.csrfToken = res.headers.get('X-CSRF-TOKEN'); });
        this.headers.append('X-CSRF-TOKEN', this.csrfToken);
        this.http.post(this.loginUrl, postData, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return alert(res.status); }, function (err) { return _this.logError(err); }, function () { return done(); });
    };
    AuthenticationService.prototype.logout = function () {
        this.http.post(this.logoutUrl, {});
    };
    AuthenticationService.prototype.getCsrfToken = function () {
        return this.http.get(this.loginUrl).map(function (res) { return res; });
    };
    AuthenticationService.prototype.checkCredentials = function () {
    };
    AuthenticationService.prototype.logError = function (err) {
        console.log(err);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map