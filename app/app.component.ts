import { Component } from '@angular/core';
import { Gem } from './gems/gem';
import { GemListComponent } from './gems/gem-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
  	GemListComponent,
	ROUTER_DIRECTIVES
	],
  providers: [HTTP_PROVIDERS,]
})
export class AppComponent {
  
  title ="Application name";
  
}
