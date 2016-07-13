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
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.urlBackend = "http://127.0.0.3:7890/api/v1/projects";
    }
    ProjectService.prototype.getData = function (r) { var body = r.json(); return body._embedded.projects; };
    ProjectService.prototype.getSingleData = function (r) {
        var body = r.json();
        return body;
    };
    ProjectService.prototype.getResponse = function (r) { var body = r; return body; };
    ProjectService.prototype.getError = function (error) { return Observable_1.Observable.throw(error); };
    ProjectService.prototype.getOptions = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ProjectService.prototype.getProjects = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.urlBackend, requestOptions)
            .map(this.getData)
            .catch(this.getError);
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.urlBackend + "/" + id)
            .map(this.getSingleData)
            .catch(this.getError);
    };
    ProjectService.prototype.getByUrl = function (url) {
        return this.http.get(url)
            .map(this.getSingleData)
            .catch(this.getError);
    };
    ProjectService.prototype.save = function (project) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        var url = '';
        if (project.ids != null) {
            url = this.urlBackend + "/" + project.ids;
            return this.http.put(url, JSON.stringify(project), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
        else {
            url = this.urlBackend;
            return this.http.post(url, JSON.stringify(project), requestOptions)
                .map(this.getSingleData)
                .catch(this.getError);
        }
    };
    ProjectService.prototype.delete = function (project) {
        return this.http.delete(this.urlBackend + "/" + project.ids, this.getOptions).map(this.getResponse).catch(this.getError);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map