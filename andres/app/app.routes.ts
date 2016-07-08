import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { GemListComponent } from './gems/gem-list.component';
import { GemDetailComponent } from './gems/gem-detail.component';
import { LoginComponent } from './login/access.component';

export const routes: RouterConfig = [
	
	{ path: '',component: HomeComponent },
	{ path: 'gems', component: GemListComponent },
	{ path: 'gems/:id', component: GemDetailComponent },
	{ path: 'gem', component: GemDetailComponent },
	{ path: 'login', component: LoginComponent }

];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];