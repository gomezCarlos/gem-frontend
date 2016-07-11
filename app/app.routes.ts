import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { GemListComponent } from './gems/gem-list.component';
import { GemDetailComponent } from './gems/gem-detail.component';
import { DocumentStateComponent } from './documentStates/documentState.component';
import { AccountDetailComponent } from './accounts/account-detail.component';
import { AccountListComponent } from './accounts/account-list.component';

import { LoginComponent } from './login/access.component';

export const routes: RouterConfig = [
	
	{ path: '',component: HomeComponent },
	{ path: 'gems', component: GemListComponent },
	{ path: 'gems/:id', component: GemDetailComponent },
	{ path: 'gem', component: GemDetailComponent },
	{ path: 'documentStates', component: DocumentStateComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'accounts', component : AccountListComponent},
	{ path: 'accounts/:id', component : AccountDetailComponent},
	{ path: 'account', component : AccountDetailComponent}	

];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];