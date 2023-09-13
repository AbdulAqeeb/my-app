import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public ap:number = 0;

  public bp:number = 0;



  catch(value:any){
    this.bp = value;
  }

}

