import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Account } from './account';

@Component({
  selector: 'account-form',
  templateUrl: "app/accounts/account-form.component.html"
})

export class AccountFormComponent {

  model = new Account();

  onsubmit(){

  }
}