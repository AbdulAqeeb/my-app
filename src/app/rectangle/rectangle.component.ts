import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  public lenght:number = 0;
  public breadth:number = 0;

  public result:number = 0;

  area(){
    this.result = this.lenght * this.breadth;
  }

  perimeter(){
    this.result = 2*(this.lenght + this.breadth);
}
}