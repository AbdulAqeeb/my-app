import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {

  public github:any = [];

  constructor(private _githubService:GithubService){

  _githubService.getgithub().subscribe(
    (data:any)=>{
      this.github = [data];
    },
    (err:any)=>{
      alert("internal service error")
    }
  )

  }

}
