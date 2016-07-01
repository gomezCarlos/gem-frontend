import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Gem } from './gem';
import { GemService } from './gem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: "gem-detail",
	templateUrl: "app/gems/gem-detail.component.html",
	directives: [],
	providers: []
})
export class GemDetailComponent implements OnInit, OnDestroy {

  gem: Gem;
  error: any;
  param: any;

  constructor(private gemService: GemService,
  	private router: Router,
  	private route: ActivatedRoute
  	){
  }

  ngOnInit(){}

  ngOnDestroy(){}

  save(){}

  list(){}
}