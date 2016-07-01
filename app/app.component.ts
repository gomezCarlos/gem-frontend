import { Component } from '@angular/core';
import { Gem } from './gems/gem';
import { GemListComponent } from './gems/gem-list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'gem-app',
  templateUrl: 'app/app.component.html',
  directives: [
  	GemListComponent,
	ROUTER_DIRECTIVES
	],
  providers: []
})
export class AppComponent {
  
  title ="Gem";
  
}
