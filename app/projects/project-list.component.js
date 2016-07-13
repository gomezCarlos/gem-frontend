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
var project_service_1 = require('./project.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var mdl_component_1 = require('../mdl.component');
var ProjectListComponent = (function () {
    function ProjectListComponent(ProjectService, router) {
        this.ProjectService = ProjectService;
        this.router = router;
    }
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.ProjectService
            .getProjects()
            .subscribe(function (projects) { _this.projects = projects; }, function (error) { _this.error = error; });
    };
    ProjectListComponent.prototype.getProject = function (id) {
        var _this = this;
        this.ProjectService
            .getById(id)
            .subscribe(function (project) { _this.project = project; }, function (error) { _this.error = error; });
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent.prototype.view = function (project_id) {
        this.router.navigate(["/projects", project_id]);
    };
    ProjectListComponent.prototype.newProject = function () {
        this.router.navigate(["/project"]);
    };
    ProjectListComponent.prototype.delete = function (project) {
        var _this = this;
        this.ProjectService.delete(project).subscribe(function (res) { alert(res.status); _this.notification = true; _this.getProjects(); }, function (error) { _this.error = error; alert("Error: " + error); });
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: "project-list",
            templateUrl: "app/projects/project-list.component.html",
            directives: [mdl_component_1.MdlComponent],
            providers: [project_service_1.ProjectService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map