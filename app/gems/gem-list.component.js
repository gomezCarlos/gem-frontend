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
var http_1 = require('@angular/http');
var GemListComponent = (function () {
    function GemListComponent(gemService) {
        this.gemService = gemService;
        // code...
    }
    GemListComponent.prototype.getGems = function () {
        var _this = this;
        this.gemService
            .getGems()
            .subscribe(function (gems) { _this.gems = gems; }, function (error) { _this.error = error; });
    };
    GemListComponent.prototype.getGem = function (id) {
        var _this = this;
        this.gemService
            .getById(id)
            .subscribe(function (gem) { _this.gem = gem; }, function (error) { _this.error = error; });
    };
    GemListComponent.prototype.ngOnInit = function () {
        this.getGems();
    };
    GemListComponent = __decorate([
        core_1.Component({
            selector: "gem-list",
            templateUrl: "app/gems/gem-list.component.html",
            directives: [],
            providers: [gem_service_1.GemService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [gem_service_1.GemService])
    ], GemListComponent);
    return GemListComponent;
}());
exports.GemListComponent = GemListComponent;
//# sourceMappingURL=gem-list.component.js.map