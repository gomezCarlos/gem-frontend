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
var documentState_service_1 = require('./documentState.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var mdl_component_1 = require('../mdl.component');
var DocumentStateComponent = (function () {
    function DocumentStateComponent(documentStateService, router) {
        this.documentStateService = documentStateService;
        this.router = router;
    }
    DocumentStateComponent.prototype.ngOnInit = function () {
        this.getDocumentStates();
    };
    DocumentStateComponent.prototype.getDocumentStates = function () {
        var _this = this;
        this.documentStateService.get().subscribe(function (documentStates) { _this.documentStates = documentStates; }, function (error) { _this.error = error; });
    };
    DocumentStateComponent.prototype.view = function (documentState) {
        this.router.navigate(["", documentState.ids]);
    };
    DocumentStateComponent.prototype.edit = function (documentState) {
        this.router.navigate(["", documentState.ids]);
    };
    DocumentStateComponent.prototype.delete = function (documentState) {
        this.documentStateService.delete(documentState);
    };
    DocumentStateComponent = __decorate([
        core_1.Component({
            selector: 'document-states',
            templateUrl: 'app/documentStates/documentStates.component.html',
            providers: [documentState_service_1.DocumentStateService, http_1.HTTP_PROVIDERS],
            directives: [mdl_component_1.MdlComponent]
        }), 
        __metadata('design:paramtypes', [documentState_service_1.DocumentStateService, router_1.Router])
    ], DocumentStateComponent);
    return DocumentStateComponent;
}());
exports.DocumentStateComponent = DocumentStateComponent;
//# sourceMappingURL=documentState.component.js.map