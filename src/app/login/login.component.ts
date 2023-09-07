import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public loginForm:FormGroup = new FormGroup({

  email:new FormControl(),
  password:new FormControl(),
});
constructor(private loginService:LoginService,private router:Router){}
login(){
  console.log(this.loginForm);
  this.loginService.login(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("login success");
      this.router.navigateByUrl("/dashboard")
      localStorage.setItem('token',data.token)
      
    },
    (err:any)=>{
      alert("login error")
    }
      )
    }
}


