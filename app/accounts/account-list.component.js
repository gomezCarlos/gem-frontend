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
var account_service_1 = require('./account.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var mdl_component_1 = require('../mdl.component');
var AccountListComponent = (function () {
    function AccountListComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.accountService
            .getAccounts()
            .subscribe(function (accounts) { _this.accounts = accounts; }, function (error) { _this.error = error; });
    };
    AccountListComponent.prototype.getAccount = function (id) {
        var _this = this;
        this.accountService
            .getById(id)
            .subscribe(function (account) { _this.account = account; }, function (error) { _this.error = error; });
    };
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.view = function (account_id) {
        this.router.navigate(["/accounts", account_id]);
    };
    AccountListComponent.prototype.newAccount = function () {
        this.router.navigate(["/account"]);
    };
    AccountListComponent.prototype.delete = function (account) {
        var _this = this;
        this.accountService.delete(account).subscribe(function (res) { alert(res.status); _this.notification = true; _this.getAccounts(); }, function (error) { _this.error = error; alert("Error: " + error); });
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: "account-list",
            templateUrl: "app/accounts/account-list.component.html",
            directives: [mdl_component_1.MdlComponent],
            providers: [account_service_1.AccountService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=account-list.component.js.map