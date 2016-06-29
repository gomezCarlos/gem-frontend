import { Component, OnInit } from '@angular/core';
import { Gem } from './gem';
import { GemService } from './gem.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: "gem-list",
	templateUrl: "app/gems/gem-list.component.html",
	directives: [],
	providers: [GemService,HTTP_PROVIDERS]
})

export class GemListComponent implements OnInit {

	gems: Gem[];
	error: any;

	constructor(private gemService : GemService ) {
		// code...
	}

	getUsers(){
		this.gemService
		.getGems()
		.subscribe(
			gems => {this.gems = gems;},
			error => {this.error = error;}
			);
	}

	ngOnInit(){
		this.getUsers();
		alert("Mis gemas: "+this.gems)
	}
}