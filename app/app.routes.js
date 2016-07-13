"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var gem_list_component_1 = require('./gems/gem-list.component');
var gem_detail_component_1 = require('./gems/gem-detail.component');
var documentState_component_1 = require('./documentStates/documentState.component');
var account_detail_component_1 = require('./accounts/account-detail.component');
var account_list_component_1 = require('./accounts/account-list.component');
var project_detail_component_1 = require('./projects/project-detail.component');
var project_list_component_1 = require('./projects/project-list.component');
var access_component_1 = require('./login/access.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'gems', component: gem_list_component_1.GemListComponent },
    { path: 'gems/:id', component: gem_detail_component_1.GemDetailComponent },
    { path: 'gem', component: gem_detail_component_1.GemDetailComponent },
    { path: 'documentStates', component: documentState_component_1.DocumentStateComponent },
    { path: 'login', component: access_component_1.LoginComponent },
    { path: 'accounts', component: account_list_component_1.AccountListComponent },
    { path: 'accounts/:id', component: account_detail_component_1.AccountDetailComponent },
    { path: 'account', component: account_detail_component_1.AccountDetailComponent },
    { path: 'projects', component: project_list_component_1.ProjectListComponent },
    { path: 'projects/:id', component: project_detail_component_1.ProjectDetailComponent },
    { path: 'project', component: project_detail_component_1.ProjectDetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app.routes.js.map