"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var gem_list_component_1 = require('./gems/gem-list.component');
exports.routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'gems', component: gem_list_component_1.GemListComponent },
];
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app.routes.js.map