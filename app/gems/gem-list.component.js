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
var gem_service_1 = require('./gem.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var mdl_component_1 = require('../mdl.component');
var ng2_pagination_1 = require('ng2-pagination');
var GemListComponent = (function () {
    function GemListComponent(gemService, router) {
        this.gemService = gemService;
        this.router = router;
        this.p = 0;
    }
    GemListComponent.prototype.getGems = function () {
        var _this = this;
        this.gemService
            .getGems()
            .subscribe(function (gems) { _this.gems = gems; }, function (error) { _this.error = error; });
    };
    GemListComponent.prototype.getPage = function (page) {
        var _this = this;
        this.loading = true;
        this.gemsAsync =
            this.gemService
                .getPage(page)
                .do(function (res) {
                _this.total = res.total;
                _this.p = page;
                _this.loading = false;
                alert(res.items);
                alert(res.total);
            }).map(function (res) {
                return res.items;
            });
    };
    /*
    getPage(page: number){
        this.total = 22;
        this.p = 0;
        this.loading=false;
        return this.getGems();
    }
    */
    GemListComponent.prototype.getGem = function (id) {
        var _this = this;
        this.gemService
            .getById(id)
            .subscribe(function (gem) { _this.gem = gem; }, function (error) { _this.error = error; });
    };
    GemListComponent.prototype.ngOnInit = function () {
        this.getGems();
        this.getPage(0);
    };
    GemListComponent.prototype.view = function (gem_id) {
        this.router.navigate(["/gems", gem_id]);
    };
    GemListComponent.prototype.newGem = function () {
        this.router.navigate(["/gem"]);
    };
    GemListComponent.prototype.delete = function (gem) {
        var _this = this;
        this.gemService.delete(gem).subscribe(function (res) { alert(res.status); _this.notification = true; _this.getGems(); }, function (error) { _this.error = error; alert("Error: " + error); });
    };
    GemListComponent = __decorate([
        core_1.Component({
            selector: "gem-list",
            templateUrl: "app/gems/gem-list.component.html",
            directives: [mdl_component_1.MdlComponent, ng2_pagination_1.PaginationControlsCmp],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [gem_service_1.GemService, http_1.HTTP_PROVIDERS, ng2_pagination_1.PaginationService],
        }), 
        __metadata('design:paramtypes', [gem_service_1.GemService, router_1.Router])
    ], GemListComponent);
    return GemListComponent;
}());
exports.GemListComponent = GemListComponent;
//# sourceMappingURL=gem-list.component.js.map