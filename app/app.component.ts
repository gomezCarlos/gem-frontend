import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [
	MD_TOOLBAR_DIRECTIVES,
	MD_SIDENAV_DIRECTIVES,
	MdIcon,
	MD_BUTTON_DIRECTIVES,
	MD_CARD_DIRECTIVES,
	MD_INPUT_DIRECTIVES,
	MD_LIST_DIRECTIVES,
	ROUTER_DIRECTIVES
	],
  providers: [MdIconRegistry]
})
export class AppComponent {
  
  title ="Application name";
  
}
