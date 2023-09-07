import { Component } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
public marks:any;



public result:any;

calculate(){
this.marks = this.marks()
}
}


