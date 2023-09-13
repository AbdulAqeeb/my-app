import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {
  public boredom:any = [];

  constructor(private _boredemService:BoredomService){
    _boredemService.getboredom().subscribe(
      (data:any)=>{
        this.boredom = [data];
      },
      (err:any)=>{
        alert("Internal service error")
      }
    )
  }
  reload(){
    this._boredemService.getboredom().subscribe(
      (data:any)=>{
        this.boredom = [data];
      },
      (err:any)=>
      alert("Internal service error")
    )
  }
}
