import { Component, OnInit } from '@angular/core';
import { Gem } from './gem';
import { GemService } from './gem.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';

@Component({
	selector: "gem-list",
	templateUrl: "app/gems/gem-list.component.html",
	directives: [MdlComponent],
	providers: [GemService,HTTP_PROVIDERS]
})

export class GemListComponent implements OnInit {

	notification : any;

	gems: Gem[];
	gem: Gem;
	error: any;
	constructor(private gemService : GemService,
		private router : Router
	 ) {
	}

	getGems(){
		this.gemService
		.getGems()
		.subscribe(
			gems => {this.gems = gems;},
			error => {this.error = error;}
			);
	}

	getGem(id: number){
		this.gemService
		.getById(id)
		.subscribe(
			gem =>{this.gem = gem;},
			error => {this.error = error;}
			)
	}

	ngOnInit(){
		this.getGems();
	}

	view(gem_id: number){
		this.router.navigate(["/gems",gem_id]);
	}

	newGem(){
		this.router.navigate(["/gem"]);
	}
	delete(gem: Gem){
		this.gemService.delete(gem).subscribe(
			res =>{alert(res.status); this.notification=true;  this.getGems();},
			error => { this.error = error; alert("Error: "+error)}
			);
		
	}
}