import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { GemListComponent } from './gems/gem-list.component';
import { GemDetailComponent } from './gems/gem-detail.component';
import { DocumentStateComponent } from './documentStates/documentState.component';
import { AccountDetailComponent } from './accounts/account-detail.component';
import { AccountListComponent } from './accounts/account-list.component';
import { ProjectDetailComponent } from './projects/project-detail.component';
import { ProjectListComponent } from './projects/project-list.component';
import { TaskDetailComponent } from './tasks/task-detail.component';
import { TaskListComponent } from './tasks/task-list.component';


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
	{ path: 'account', component : AccountDetailComponent},
	{ path: 'projects', component : ProjectListComponent},
	{ path: 'projects/:id', component : ProjectDetailComponent},
	{ path: 'project', component : ProjectDetailComponent},
	{ path: 'tasks', component : TaskListComponent},
	{ path: 'task', component : TaskDetailComponent}	

];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];