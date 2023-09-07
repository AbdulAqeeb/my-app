import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string = "abcdefgh";

  public city:string = "HYDERABAD"

  public user:any = {name:'abc', age:20};

  public today:any = new Date();
}
