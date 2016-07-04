import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Gem } from './gem';
import { GemService } from './gem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { GemFormComponent } from './gem-form.component';

@Component({
	selector: "gem-detail",
	templateUrl: "app/gems/gem-detail.component.html",
	directives: [GemFormComponent],
	providers: [GemService,HTTP_PROVIDERS]
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

  ngOnInit(){
    this.param = this.route.params.subscribe(parameter=>{
      let id = parameter['id'];
      if(id){
        this.gemService
        .getById(id)
        .subscribe(gem => this.gem = gem,
          error => this.error = error);
      }
      else{
        this.gem = new Gem();
      }
    }
    )
  }

  ngOnDestroy(){
    this.param.unsubscribe();
  }

  save(){
    this.gemService.save(this.gem)
      .subscribe(gem => { this.gem = gem; this.router.navigate(["/gems"])},
        error => this.error = error
        );
  }

  list(){
    this.router.navigate(["/gems"]);
  }
}