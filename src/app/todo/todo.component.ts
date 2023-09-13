import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

public terms:string[] = [];
public value:string = "";

add(){
  this.terms.push(this.value);
  console.log(this.terms);
}
delete(i:number){
  this.terms.splice(i,1);
}




}
