import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
public createaccountform: FormGroup = new FormGroup({

account_name: new FormControl(),
available_balance: new FormControl(),
account_number: new FormControl(),
city:new FormControl(),
address: new FormGroup({
  hno: new FormControl(),
state: new FormControl(),
pin: new FormControl()
}),
type: new FormControl(),
busFee: new FormControl(),
hostelFee: new FormControl(),

});

constructor(private _accountService:AccountService){}
  

submit(){
  console.log(this.createaccountform)

  this._accountService.createaccount(this.createaccountform.value).subscribe(
  (data:any)=>{
    alert("createaccount created successfully");
  },
  (err:any)=>{
    alert("createaccount creationfailed")
  }
  )
}
}
