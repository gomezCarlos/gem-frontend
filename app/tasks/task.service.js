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
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.urlBackend = "http://127.0.0.3:7890/api/v1/tasks";
    }
    TaskService.prototype.getData = function (r) { var body = r.json(); return body._embedded.tasks; };
    TaskService.prototype.getSingleData = function (r) { var body = r.json(); return body; };
    TaskService.prototype.getError = function (error) { return Observable_1.Observable.throw(error); };
    TaskService.prototype.getResponse = function (r) { var body = r; return body; };
    TaskService.prototype.getOptions = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    TaskService.prototype.getTasks = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var params = new http_1.URLSearchParams();
        params.set("sort", "name");
        var requestOptions = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.get(this.urlBackend, requestOptions)
            .map(this.getData)
            .catch(this.getError);
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(this.urlBackend + "/" + id)
            .map(this.getSingleData)
            .catch(this.getError);
    };
    TaskService.prototype.save = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        var url = '';
        if (task.ids != null) {
            url = this.urlBackend + "/" + task.ids;
            return this.http.put(url, JSON.stringify(task), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
        else {
            url = this.urlBackend;
            return this.http.post(url, JSON.stringify(task), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
    };
    TaskService.prototype.delete = function (task) {
        return this.http.delete(this.urlBackend + "/" + task.ids, this.getOptions).map(this.getResponse).catch(this.getError);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map