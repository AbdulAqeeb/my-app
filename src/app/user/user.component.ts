import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public userform: FormGroup = new FormGroup({

    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    phone: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    city: new FormControl("",[]),
    fee: new FormControl(),
    id: new FormControl(),
    address: new FormGroup({
      hno:new FormControl(),
      state: new FormControl("",[Validators.required]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([]),
  });

  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }
  addcard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }

  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  constructor(private _userservice: UsersService) { }

  submit() {
    console.log(this.userform)

    this._userservice.createuser(this.userform.value).subscribe(
      (data: any) => {
        alert("user created successfully");
      },
      (err: any) => {
        alert("user creation failed");
      }
    )
  }

}

