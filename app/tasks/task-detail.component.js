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
var task_1 = require('./task');
var task_service_1 = require('./task.service');
var project_service_1 = require('../projects/project.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var TaskDetailComponent = (function () {
    function TaskDetailComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.params.subscribe(function (parameter) {
            var id = parameter['id'];
            if (id) {
                _this.service
                    .getById(id)
                    .subscribe(function (response) { return _this.task = response; }, function (error) { return _this.error = error; });
            }
            else {
                _this.task = new task_1.Task();
            }
        });
    };
    TaskDetailComponent.prototype.ngOnDestroy = function () {
        this.param.unsubscribe();
    };
    TaskDetailComponent.prototype.save = function () {
        var _this = this;
        this.service.save(this.task)
            .subscribe(function (response) { _this.task = response; _this.router.navigate(["/gems"]); }, function (error) { return _this.error = error; });
    };
    TaskDetailComponent.prototype.list = function () {
        this.router.navigate(["/tasks"]);
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: "task-detail",
            templateUrl: "app/tasks/task-detail.component.html",
            directives: [],
            providers: [task_service_1.TaskService, project_service_1.ProjectService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.Router, router_1.ActivatedRoute])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map