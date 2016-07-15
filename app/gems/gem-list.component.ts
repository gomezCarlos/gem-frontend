import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Gem } from './gem';
import { GemService } from './gem.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';
import {Observable} from 'rxjs';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

interface IServerResponse {
    items: Gem[];
    total: number;
}

@Component({
	selector: "gem-list",
	templateUrl: "app/gems/gem-list.component.html",
	directives: [MdlComponent, PaginationControlsCmp],
	pipes: [PaginatePipe],
	providers: [GemService,HTTP_PROVIDERS, PaginationService],
	
})

export class GemListComponent implements OnInit {

	notification : any;

	gems: Gem[];
	gemsAsync: Observable<Gem[]>;
	gem: Gem;
	empty : boolean;
	error: any;
	p: number = 0;
    total: number;
    loading: boolean;

	constructor(private gemService : GemService,
		private router : Router
	 ) {
	}

	getGems(){
		this.gemService
		.getGems()
		.subscribe(
			gems => {this.gems = gems;},
			error => {this.error = error;
				if(error.status == 401)
					alert("Inicie sesión primero.");
			}
			);
	}

	getPage(page: number){
		this.loading = true;
		this.gemsAsync = 
		this.gemService
		.getPage(page)
		.do(res=> {
			this.total = res.total;
			this.p = page;
			this.loading = false;
			alert(res.items);
			alert(res.total)
		}).map(res => {

			return res.items});
	}

/*
getPage(page: number){
	this.total = 22;
	this.p = 0;
	this.loading=false;
	return this.getGems();
}
*/

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
		this.getPage(0);
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