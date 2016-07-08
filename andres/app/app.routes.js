"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var gem_list_component_1 = require('./gems/gem-list.component');
var gem_detail_component_1 = require('./gems/gem-detail.component');
var access_component_1 = require('./login/access.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'gems', component: gem_list_component_1.GemListComponent },
    { path: 'gems/:id', component: gem_detail_component_1.GemDetailComponent },
    { path: 'gem', component: gem_detail_component_1.GemDetailComponent },
    { path: 'login', component: access_component_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app.routes.js.map