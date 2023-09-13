import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent { 
  // child to parent
@Input() public ac:number = 0;

// parent to child
public bc:number = 0;
@Output() public bEvent:EventEmitter<any> = new EventEmitter();



send(){
  this.bEvent.emit(this.bc);
}


}
