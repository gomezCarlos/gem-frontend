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
var project_1 = require('./project');
var project_service_1 = require('./project.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var project_form_component_1 = require('./project-form.component');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(ProjectService, router, route) {
        this.ProjectService = ProjectService;
        this.router = router;
        this.route = route;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.params.subscribe(function (parameter) {
            var id = parameter['id'];
            if (id) {
                _this.ProjectService
                    .getById(id)
                    .subscribe(function (project) { return _this.project = project; }, function (error) { return _this.error = error; });
            }
            else {
                _this.project = new project_1.Project();
            }
        });
    };
    ProjectDetailComponent.prototype.ngOnDestroy = function () {
        this.param.unsubscribe();
    };
    ProjectDetailComponent.prototype.save = function () {
        var _this = this;
        this.ProjectService.save(this.project)
            .subscribe(function (project) { _this.project = project; _this.router.navigate(["/projects"]); }, function (error) { return _this.error = error; });
    };
    ProjectDetailComponent.prototype.list = function () {
        this.router.navigate(["/projects"]);
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: "project-detail",
            templateUrl: "app/projects/project-detail.component.html",
            directives: [project_form_component_1.ProjectFormComponent],
            providers: [project_service_1.ProjectService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router, router_1.ActivatedRoute])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map