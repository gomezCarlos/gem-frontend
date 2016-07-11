import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Account } from './account';
import { AccountService } from './account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { AccountFormComponent } from './account-form.component';

@Component({
	selector: "account-detail",
	templateUrl: "app/accounts/account-detail.component.html",
	directives: [AccountFormComponent],
	providers: [AccountService,HTTP_PROVIDERS]
})
export class AccountDetailComponent implements OnInit, OnDestroy {

  account: Account;
  error: any;
  param: any;
  constructor(private accountService: AccountService,
  	private router: Router,
  	private route: ActivatedRoute
  	){
  }

  ngOnInit(){
    this.param = this.route.params.subscribe(parameter=>{
      let id = parameter['id'];
      if(id){
        this.accountService
        .getById(id)
        .subscribe(account => this.account = account,
          error => this.error = error);
      }
      else{
        this.account = new Account();
      }
    }
    )
  }

  ngOnDestroy(){
    this.param.unsubscribe();
  }

  save(){
    this.accountService.save(this.account)
      .subscribe(account => { this.account = account; this.router.navigate(["/accounts"])},
        error => this.error = error
        );
  }

  list(){
    this.router.navigate(["/accounts"]);
  }
}