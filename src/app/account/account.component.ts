import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public account:any = [];

  constructor(private _accountService:AccountService){

  _accountService.getAccount().subscribe(
    (data:any)=>{
      this.account = data;
    },

    (err:any)=>{
      alert("internal server error");
    }
  )

  }
}
