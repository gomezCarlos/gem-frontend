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
var gem_1 = require('./gem');
var gem_service_1 = require('./gem.service');
var router_1 = require('@angular/router');
var GemDetailComponent = (function () {
    function GemDetailComponent(gemService, router, route) {
        this.gemService = gemService;
        this.router = router;
        this.route = route;
    }
    GemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.params.subscribe(function (parameter) {
            var id = parameter['id'];
            if (id)
                _this.gemService.getById(id).subscribe(function (gem) { return _this.gem = gem; }, function (error) { return _this.error = error; });
            else
                _this.gem = new gem_1.Gem();
        });
    };
    GemDetailComponent.prototype.ngOnDestroy = function () {
        this.param.unsubscribe();
    };
    GemDetailComponent.prototype.save = function () { };
    GemDetailComponent.prototype.list = function () { };
    GemDetailComponent = __decorate([
        core_1.Component({
            selector: "gem-detail",
            templateUrl: "app/gems/gem-detail.component.html",
            directives: [],
            providers: [gem_service_1.GemService]
        }), 
        __metadata('design:paramtypes', [gem_service_1.GemService, router_1.Router, router_1.ActivatedRoute])
    ], GemDetailComponent);
    return GemDetailComponent;
}());
exports.GemDetailComponent = GemDetailComponent;
//# sourceMappingURL=gem-detail.component.js.map