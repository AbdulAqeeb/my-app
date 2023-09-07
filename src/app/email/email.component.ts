import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  public email:any = []

  constructor(private _emailservice:EmailService){
  _emailservice.getemail().subscribe(
    (data:any)=>{
    this.email = data;
    },
      (err:any)=>{
        alert("internal service error")
      }
   
  )

  }

}
