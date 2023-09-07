import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users:any = []

constructor(private _usersService:UsersService){

  _usersService.getusers().subscribe(
    (data:any)=>{
      this.users = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
}
