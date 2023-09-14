import { Component } from '@angular/core';

@Component({
  selector: 'app-result-parent',
  templateUrl: './result-parent.component.html',
  styleUrls: ['./result-parent.component.css']
})
export class ResultParentComponent {
public num1:number = 0;

public num2:number = 0;

public r1:number = 0;

catch(value:any){
  this.r1 = value;
}
}
