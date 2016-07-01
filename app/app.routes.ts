import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { GemListComponent } from './gems/gem-list.component';
import { GemDetailComponent } from './gems/gem-detail.component';

export const routes: RouterConfig = [
	{path: '',component: AppComponent},
	{path: 'gems', component: GemListComponent},
	{path: 'gem/:id', component: GemDetailComponent},

];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];