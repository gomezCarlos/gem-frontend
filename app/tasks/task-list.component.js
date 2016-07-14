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
var task_service_1 = require('./task.service');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var mdl_component_1 = require('../mdl.component');
var ng2_pagination_1 = require('ng2-pagination');
var TaskListComponent = (function () {
    function TaskListComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    TaskListComponent.prototype.getAll = function () {
        var _this = this;
        this.service
            .getTasks()
            .subscribe(function (response) { _this.tasks = response; }, function (error) { _this.error = error; });
    };
    TaskListComponent.prototype.view = function (id) {
        this.router.navigate(["/tasks", id]);
    };
    TaskListComponent.prototype.create = function () {
        this.router.navigate(["/task"]);
    };
    TaskListComponent.prototype.delete = function (object) {
        var _this = this;
        this.service.delete(object).subscribe(function (res) { _this.getAll(); }, function (error) { _this.error = error; });
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: "task-list",
            templateUrl: "app/tasks/task-list.component.html",
            directives: [mdl_component_1.MdlComponent, ng2_pagination_1.PaginationControlsCmp],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [task_service_1.TaskService, http_1.HTTP_PROVIDERS, ng2_pagination_1.PaginationService],
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map