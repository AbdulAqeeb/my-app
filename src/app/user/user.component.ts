import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public userform: FormGroup = new FormGroup({

    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    fee: new FormControl(),
    id: new FormControl(),
  });
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

