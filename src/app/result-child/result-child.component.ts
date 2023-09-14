import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-child',
  templateUrl: './result-child.component.html',
  styleUrls: ['./result-child.component.css']
})
export class ResultChildComponent {
@Input() public n1:number = 0;

@Input() public n2:number = 0;

@Output() public bEvent:EventEmitter<any> = new EventEmitter();
@Output() public result:EventEmitter<any> = new EventEmitter();

sum(){
  this.result.emit(this.n1 + this.n2)
}
sub(){
  this.result.emit(this.n1 - this.n2)
}
mul(){
  this.result.emit(this.n1 * this.n2)
}
}

