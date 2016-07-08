import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Gem } from './gem';

@Component({
	selector: 'gem-form',
	templateUrl: "app/gems/gem-form.component.html"
})
export class GemFormComponent {

	model = new Gem();

	onsubmit(){

	}
}