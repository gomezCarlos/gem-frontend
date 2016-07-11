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
var account_1 = require('./account');
var account_service_1 = require('./account.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var account_form_component_1 = require('./account-form.component');
var AccountDetailComponent = (function () {
    function AccountDetailComponent(accountService, router, route) {
        this.accountService = accountService;
        this.router = router;
        this.route = route;
    }
    AccountDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.params.subscribe(function (parameter) {
            var id = parameter['id'];
            if (id) {
                _this.accountService
                    .getById(id)
                    .subscribe(function (account) { return _this.account = account; }, function (error) { return _this.error = error; });
            }
            else {
                _this.account = new account_1.Account();
            }
        });
    };
    AccountDetailComponent.prototype.ngOnDestroy = function () {
        this.param.unsubscribe();
    };
    AccountDetailComponent.prototype.save = function () {
        var _this = this;
        this.accountService.save(this.account)
            .subscribe(function (account) { _this.account = account; _this.router.navigate(["/accounts"]); }, function (error) { return _this.error = error; });
    };
    AccountDetailComponent.prototype.list = function () {
        this.router.navigate(["/accounts"]);
    };
    AccountDetailComponent = __decorate([
        core_1.Component({
            selector: "account-detail",
            templateUrl: "app/accounts/account-detail.component.html",
            directives: [account_form_component_1.AccountFormComponent],
            providers: [account_service_1.AccountService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router, router_1.ActivatedRoute])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());
exports.AccountDetailComponent = AccountDetailComponent;
//# sourceMappingURL=account-detail.component.js.map