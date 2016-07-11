import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';

@Component({
	selector: "account-list",
	templateUrl: "app/accounts/account-list.component.html",
	directives: [MdlComponent],
	providers: [AccountService,HTTP_PROVIDERS]
})

export class AccountListComponent implements OnInit {

	notification: any;

	accounts: Account[];
	account: Account;
	error: any;

	constructor(private accountService : AccountService,
		private router : Router
	 ) {}

	getAccounts(){
		this.accountService
		.getAccounts()
		.subscribe(
			accounts => {this.accounts = accounts;},
			error => {this.error = error;}
			);
	}

	getAccount(id: number){
		this.accountService
		.getById(id)
		.subscribe(
			account =>{this.account = account;},
			error => {this.error = error;}
			)
	}

	ngOnInit(){
		this.getAccounts();
	}

	view(account_id: number){
		this.router.navigate(["/accounts", account_id]);
	}

	newAccount(){
		this.router.navigate(["/account"]);
	}
	delete(account: Account){
		this.accountService.delete(account).subscribe(
			res =>{alert(res.status); this.notification=true;  this.getAccounts();},
			error => { this.error = error; alert("Error: "+error)}
			);
		
	}
}