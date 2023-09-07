import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public num1:number = 0;
  public num2:number = 0;

  public result : number=0;

  sum(){
    this.result=this.num1+this.num2;
  }


  mul(){
    this.result=this.num1*this.num2;
  }


}
