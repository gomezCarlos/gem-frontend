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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
var GemService = (function () {
    function GemService(http) {
        this.http = http;
        this.urlBackend = "http://127.0.0.3:7890/api/v1/gems";
    }
    GemService.prototype.getData = function (r) { var body = r.json(); return body._embedded.gems; };
    GemService.prototype.getPaginatedData = function (r) {
        var body = r.json();
        return Observable_1.Observable.of({ items: body._embedded.gems, total: body.page.totalElements });
    };
    GemService.prototype.getSingleData = function (r) {
        var body = r.json();
        return body;
    };
    GemService.prototype.getResponse = function (r) { var body = r; return body; };
    GemService.prototype.getError = function (error) { return Observable_1.Observable.throw(error); };
    GemService.prototype.getOptions = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    GemService.prototype.getGems = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.urlBackend, requestOptions)
            .map(this.getData)
            .catch(this.getError);
    };
    GemService.prototype.getById = function (id) {
        return this.http.get(this.urlBackend + "/" + id)
            .map(this.getSingleData)
            .catch(this.getError);
    };
    GemService.prototype.getByUrl = function (url) {
        return this.http.get(url)
            .map(this.getSingleData)
            .catch(this.getError);
    };
    GemService.prototype.save = function (gem) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        var url = '';
        if (gem.gemId != null) {
            url = this.urlBackend + "/" + gem.gemId;
            return this.http.put(url, JSON.stringify(gem), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
        else {
            url = this.urlBackend;
            return this.http.post(url, JSON.stringify(gem), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
    };
    GemService.prototype.delete = function (gem) {
        return this.http.delete(this.urlBackend + "/" + gem.gemId, this.getOptions).map(this.getResponse).catch(this.getError);
    };
    GemService.prototype.getPage = function (page) {
        var perPage = 10;
        var params = new http_1.URLSearchParams();
        params.set("size", perPage.toString());
        params.set("page", page.toString());
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(this.urlBackend, requestOptions)
            .map(this.getPaginatedData)
            .catch(this.getError);
    };
    GemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GemService);
    return GemService;
}());
exports.GemService = GemService;
//# sourceMappingURL=gem.service.js.map